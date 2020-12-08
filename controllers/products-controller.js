
const express = require("express");

const productService = require("../logic/products-service.js");

const router = express.Router();


router.get("/", (request, response)=>{
    //response.status(200).header("Content-Type", "application/json").send(JSON.stringify(products));
    const products = productService.getAllProducts();
    response.json(products);
});



router.get("/:id", (request, response)=>{
    const id = +request.params.id;
    const product = productService.getSpecificProduct(id);
    response.json(product);

});

module.exports = router;