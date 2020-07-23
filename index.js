const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/schema')
const database = require('./helpers/db-connect')
const { ApolloServer, gql } = require('apollo-server-express');

require('dotenv').config();
const server = new ApolloServer({schema});
const app = express();

/* connect database */
database.connect();
server.applyMiddleware({ app });
// app.use('/', graphqlHTTP({
//     schema: schema,
//     graphiql: true,
//     pretty: true
// }));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ${server.graphqlPath}`)
})