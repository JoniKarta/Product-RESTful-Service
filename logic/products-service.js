

const dao = require("../data-access-layer/dal.js");


async function getSpecificProduct(id){
    const products = await dao.findAll();
    const product = products.find(prod => prod.id === id);
    return product;
}


async function getAllProducts(){
    const products = await dao.findAll();
    return products;
}


module.exports = {
    getSpecificProduct,
    getAllProducts
};