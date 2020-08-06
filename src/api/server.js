const { ServerConfig } = require('../config');
const { routerV1 } = require('../routes');

const main = () => {
  const port = process.env.PORT || 3000;
  const server = new ServerConfig({
    port,
    routers: [routerV1],
  });

  server.listen();
};

main();
