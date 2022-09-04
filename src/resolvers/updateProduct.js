const { Product } = require("../models");

const updateProduct = async (_, { input, productId }) => {
  console.log(input);

  const newProduct = new Product(input);

  const updatedProduct = Product.findOneAndUpdate(
    productId,
    {
      $set: { ...input },
    },
    {
      returnDocument: "after",
    }
  );

  return updatedProduct;
};
module.exports = updateProduct;
