// require('./db/db.js') // import DataBase connection file

require('dotenv').config() // add env variables from .env file in process.env
const express = require('express')
const router = require('./routes/web.js')
const {ApolloServer} = require('apollo-server-express')

const resolvers = require('./app/graphql/resolvers') // resolver for GraphQL
const typeDefs = require('./app/graphql/typeDefs/schema') // typeDefs for GraphQL

//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------

// Creating application
const app = express()

const server = new ApolloServer({  // Creating Apollo GraphQL server
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });

app.use('/', router) // add routes
app.use(express.json()) // add request data in req.body

const APP_PORT = process.env.APP_PORT || 3000
const APP_HOST = process.env.APP_HOST || 'localhost'

// Starting appliction server
app.listen(APP_PORT, APP_HOST, () => {
    console.log(`Application started on http://${APP_HOST}:${APP_PORT}`)
})