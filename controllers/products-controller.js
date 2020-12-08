
const express = require("express");

const productService = require("../logic/products-service.js");

const router = express.Router();


router.get("/", async (request, response)=>{
    //response.status(200).header("Content-Type", "application/json").send(JSON.stringify(products));
    const products = await productService.getAllProducts();
    response.json(products);
});



router.get("/:id", async (request, response)=>{
    const id = +request.params.id;
    const product = await productService.getSpecificProduct(id);
    response.json(product);

});

module.exports = router;