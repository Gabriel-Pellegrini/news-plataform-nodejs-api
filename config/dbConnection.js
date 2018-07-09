var mysql = require('mysql');


module.exports =  function () {
    return connMySQL
};

var connMySQL = function () {
    
    console.log(' Connection with Database was estabilished')
    return mysql.createConnection({
    host: 'localhost',
        user: 'root',
        password: 'gabrieric',
        database: 'mydatabase'
    });
}