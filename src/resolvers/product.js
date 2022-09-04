const { isObjectIdOrHexString } = require("mongoose");
const Product = require("../models/Product");

const product = async (_, { productId }) => {
  const product = await Product.findById(productId);
  return product;
};

module.exports = product;
