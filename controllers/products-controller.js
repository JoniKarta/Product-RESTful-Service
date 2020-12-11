
const express = require("express");

const productService = require("../logic/product-service")

const Product = require("../models/product");

const router = express.Router();


router.get("/", async (request, response) => {
    //response.status(200).header("Content-Type", "application/json").send(JSON.stringify(products));
    try {
        const products = await productService.getAllProducts();
        response.json(products);
    } catch (err) {
        response.send(err.message);
    }

});

router.get("/:id", async (request, response) => {
    try {
        const id = +request.params.id;
        const product = await productService.getSpecificProduct(id);
        response.json(product);
    } catch (err) {
        response.status(500).send(err.message);
    }


});

router.post("/", async (request, reponse) => {
    try {
        const product = new Product(undefined, request.body.name, request.body.price, request.body.stock);
        const productFromDb = await productService.createProduct(product);
        reponse.status(201).json(productFromDb);
    } catch (err) {
        response.status(500).send(err.message);
    }
});


router.put("/:id", async (request, response) => {
    try {
        const id = +request.params.id;
        const product = new Product(id, request.body.name, request.body.price, request.body.stock);
        const updateProduct = await productService.updateProduct(product);
        response.send(updateProduct);
    } catch (err) {
        console.log(err);
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const id = +request.params.id;
        await productService.deleteSpecificProduct(id);
        response.sendStatus(204);
    } catch (err) {
        response.status(500).send(err.message);
    }

});


module.exports = router;