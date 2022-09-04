const Product = require("../models/Product");

const products = async () => {
  const products = await Product.find({});
  return products;
};

module.exports = products;
