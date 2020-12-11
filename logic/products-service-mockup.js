

const dao = require("../data-access-layer/dal-mockup.js");
const dal = require("../data-access-layer/dal");

async function getSpecificProduct(id){
    const products = await dao.findAll();
    const product = products.find(prod => prod.id === id);
    return product;
}


async function getAllProducts(){
    const products = await dao.findAll();
    return products;
}

async function createProduct(product){
    const products = await dao.findAll();
    product.id = getNextId(products);
    products.push(product);
    await dao.save(products)
    return product;
}

function getNextId(products) {
    let maxId = 0;
    for(const p of products){
        maxId = Math.max(p.id, maxId);
    }
    return maxId + 1;
}

async function updateProduct(product){

    const products = await dao.findAll();
    let prod = products.find(p => p.id === product.id);
    if(!prod){
        throw "Product dosen't exists in the system" 
    }
    for(const property in prod){
        if(product[property] !== undefined)
            prod[property] = product[property];
    }

    await dao.save(products);
    
    return products;
}

async function deleteSingleProduct(id){

    const products = await dao.findAll();

    idx = products.findIndex(p => p.id === id);

    if(idx >= 0){
        products.splice(idx, 1);
        dao.save(products);
    }
}


module.exports = {
    getSpecificProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteSingleProduct
};