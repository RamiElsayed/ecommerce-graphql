const products = require("./products");
const product = require("./product");
const createProduct = require("./createProduct");
const updateProduct = require("./updateProduct");
const resolvers = {
  Query: {
    products,
    product,
  },
  Mutation: {
    createProduct,
    updateProduct,
  },
};

module.exports = resolvers;
