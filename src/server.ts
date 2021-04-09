import { ApolloServer } from "apollo-server";
// import "reflect-metadata";
import { buildSchema } from "type-graphql";
import mongoose from "mongoose";
import * as path from "path";

// resolvers
import UserResolver from "./resolvers/user";
import ProductResolver from "./resolvers/products";
import CategoriesResolver from "./resolvers/categories";
import CartResolver from "./resolvers/cart";
import OrderResolver from "./resolvers/order";

async function startApolloServer() {
  mongoose.connect("mongodb://localhost:27017/graphql-studies", {
    useNewUrlParser: true,
  });


  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      ProductResolver,
      CategoriesResolver,
      CartResolver,
      OrderResolver,
    ],
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
    // enable GraphQL Playground
    playground: true,
  });

  // Start the server
  const { url } = await server.listen(4000);
  // eslint-disable-next-line no-console
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

startApolloServer();
