const dal = require("../data-access-layer/dal");

async function getSpecificProduct(id) {
    let sql =
        `SELECT productID as id, productName as name, UnitPrice as price , UnitsInStock as stock
     FROM products 
     WHERE ProductID = ${id}`;
    let product = await dal.execute(sql);
    return product.shift();
}

async function getAllProducts() {

    let sql =
        `SELECT productID as id, productName as name, UnitPrice as price, UnitsInStock as stock
     FROM products`;

    const products = await dal.execute(sql);
    return products;
}

async function createProduct(product) {

    let sql =
        `INSERT INTO products(productName, UnitPrice, UnitsInStock) 
    VALUES('${product.name}', ${product.price}, ${product.stock})`;

    const okPacket = await dal.execute(sql);
    const productFromDb = getSpecificProduct(okPacket.insertId)
    return productFromDb;
}


async function updateProduct(product) {
    let sql =
        `UPDATE products 
     SET ProductName = '${product.name}', UnitPrice = ${product.price}, UnitsInStock = ${product.stock}
     WHERE ProductId = ${product.id}`;
    await dal.execute(sql)
}


async function deleteSpecificProduct(id) {

    sql = `DELETE FROM products WHERE ProductId = ${id}`
    await dal.execute(sql);
}

module.exports = {
    getSpecificProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteSpecificProduct
}