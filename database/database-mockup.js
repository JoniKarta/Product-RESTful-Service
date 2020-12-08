
const Product = require("../models/product.js");

const products = []


products.push(new Product(1, "Skipping Rope",20.3, 70));
products.push(new Product(2,  "Roller", 50.3, 80));
products.push(new Product(3, "Dummbell", 10.2, 100));


module.exports = {
    products
};

