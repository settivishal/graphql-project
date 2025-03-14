import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `
    type Query {
      
    }

    type Mutation {
      
    }

    type User {
      id: ID!
      name: String
      age: Int
      isMarried: Boolean
    }
`

const resolvers = {}

const server = new ApolloServer({typeDefs, resolvers});

const {url} = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);