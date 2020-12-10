

const express = require("express");

const productController = require("./controllers/products-controller.js");

const server = express();


// Middleware - Like bodyParser
server.use(express.json());

// Middleware
server.use("/api/products", productController);

server.listen(3000, ()=> console.log("Server is listenning on http://localhost:3000"));





