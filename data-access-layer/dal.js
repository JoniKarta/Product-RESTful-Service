

const db = require("../database/database-mockup.js");


function getAllProducts(){
    const products = db.products;
    return products;
}


module.exports = {
    getAllProducts
}

