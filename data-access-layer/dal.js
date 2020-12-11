
const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host: global.config.host,
//     user: global.config.user, 
//     password: global.config.password, 
//     database: global.config.database
// });

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'northwind'
})

connection.connect((err) => {
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Connection successful");
});


function execute(query){

    return new Promise((resolve, reject) => {
        connection.query(query, (err, data) => {
                if(err){
                    reject(err.message);
                }else {
                    resolve(data);
                }
        });
    });
}

module.exports = {
    execute
}