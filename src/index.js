const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const init = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("[INFO]: Database connection successful");

  const { url } = await server.listen();

  console.log(`server is running on ${url}`);
};

init();
