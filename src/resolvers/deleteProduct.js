const { Product } = require("../models");

const deleteProduct = async (_, { productId }) => {
  const deletedProduct = await Product.findByIdAndDelete(productId);

  return deletedProduct;
};
module.exports = deleteProduct;
