

const dao = require("../data-access-layer/dal.js");


function getSpecificProduct(id){
    const products = dao.getAllProducts();
    const product = products.find(prod => prod.id === id);
    return product;
}


function getAllProducts(){
    const products = dao.getAllProducts();
    return products;
}


module.exports = {
    getSpecificProduct,
    getAllProducts
};