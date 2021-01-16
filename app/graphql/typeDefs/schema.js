const {gql} = require('apollo-server-express')

const typeDefs = gql`
type User {
    uuid: ID,
    name: String,
    email: String,
}
`

module.exports = typeDefs