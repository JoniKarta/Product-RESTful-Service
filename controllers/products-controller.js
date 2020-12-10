
const express = require("express");

const productService = require("../logic/products-service.js");

const Product = require("../models/product");

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

router.post("/", async (request, reponse)=> {
    const product = new Product(undefined, request.body.name, request.body.price, request.body.stock);
    const productFromDb = await productService.createProduct(product);
    reponse.status(201).json(productFromDb);
});


router.put("/:id", async (request, response) => {
    try{
    const id = +request.params.id;
    const product = new Product(id, request.body.name, request.body.price, request.body.stock);
    const updateProduct = await productService.updateProduct(product);
    response.send(updateProduct); 
    }catch(err){
        console.log(err);
    }  
});

router.delete("/:id", async (request, response) => {
    const id = +request.params.id;
    await productService.deleteSingleProduct(id);
    response.sendStatus(204);
});


module.exports = router;