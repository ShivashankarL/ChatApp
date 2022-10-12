import { createServer } from "@graphql-yoga/node";

const messages = [];

const server = createServer({
  schema: {
    typeDefs: `type Message{
    id:ID!
    user:String!
    content:String!
}

type Query{
    messages:[Message!]
}`,
    resolvers: {
      Query: {
        messages: () => messages,
      },
    },
  },
});

server.start(({ port }) => {
  console.log(`Server on http://localhost:${port}/`);
});
