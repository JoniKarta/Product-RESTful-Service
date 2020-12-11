
const fs = require("fs");
//const db = require("../database/database-mockup.js");
const jsonFilePath = "./database/products.json";

// function getAllProducts(){
//     const products = db.products;
//     return products;
// }

function findAll(){
    return new Promise((resolve, reject) => {
        
        fs.readFile(jsonFilePath,"utf-8", (err, jsonProducts) =>{
            if(err){
                reject(err);
                return
            }
            const products = JSON.parse(jsonProducts);
            resolve(products);
        });
    });
}

function save(products){ 

    return new Promise((resolve, reject) => {
        
        const fileContent = JSON.stringify(products);
        fs.writeFile(jsonFilePath, fileContent, err => {
            if(err){
                reject(err);
                return
            }
            // TODO: handle mockup callback return 
            resolve();
        });
    });
}


module.exports = {
    findAll, 
    save
}

