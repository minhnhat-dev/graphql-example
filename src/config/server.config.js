const Express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { ApolloServer } = require('apollo-server-express');
const schema = require('../schema');
const dbConf = require('../db');
require('dotenv').config();

class ServerConfig {
  constructor({ port, middlewares, routers }) {
    this.app = Express();
    this.app.set('env', process.env.NODE_ENV || 'development');
    this.app.set('port', port);
    /* connect apollo server */
    this.registerApolloServer();

    /* register default middlewares */
    this.registerDefaultMiddlewares();

    /* Apply middlewares */
    if (middlewares) {
      middlewares.forEach((mdlw) => {
        this.registerMiddleware(mdlw);
      });
    }
    /* Register Routers */
    if (routers) {
      routers.forEach(({ baseUrl, router }) => {
        this.registerRouter(baseUrl, router);
      });
    }

    this.registerMiddleware(
      // catch 404 and forward to error handler
      (req, res, next) => {
        const err = new Error('Not Found');
        err.statusCode = 404;
        next(err);
      },
    );
    this.registerErrorHandlingMiddleware();
  }

  get port() {
    return this.app.get('port');
  }

  set port(number) {
    this.app.set('port', number);
  }

  registerDefaultMiddlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('combined'));
    this.app.use(Express.json());
  }

  /**
   * register any middleare
   * @param {*} middleware
   */
  registerMiddleware(middleware) {
    this.app.use(middleware);
    return this;
  }

  /**
   * register routers
   * @param {string} middleware
   * @param {ExpressRouter} router
   */
  registerRouter(baseUrl, router) {
    this.app.use(baseUrl, router);
    return this;
  }

  registerApolloServer() {
    const server = new ApolloServer({ schema });
    server.applyMiddleware({ app: this.app });
    return this;
  }

  registerErrorHandlingMiddleware() {
    if (this.app.get('env') === 'development') {
      this.registerMiddleware(
        ({ statusCode = 500, message, stack }, req, res, next) => {
          res.status(statusCode);
          res.json({
            statusCode,
            message,
            stack,
          });
        },
      );
    } else {
      this.registerMiddleware(
        ({ statusCode = 500, message }, req, res, next) => {
          res.status(statusCode);
          res.json({ statusCode, message });
        },
      );
    }
    return this;
  }

  async listen() {
    try {
      await dbConf.connectDb();
      this.app.listen(this.port, () => {
        console.log(`Listening on port: ${this.port}`);
      });
    } catch (error) {
      console.error(`DB error: ${error.message}`);
    }
  }
}

module.exports = ServerConfig;
