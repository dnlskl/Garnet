const {gql} = require('apollo-server-express')

const typeDefs = gql`
type User {
    uuid: ID,
    name: String,
    email: String,
}

type Query {
    hello: String
}
`

module.exports = typeDefs