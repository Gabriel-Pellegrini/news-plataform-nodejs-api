var mysql = require('mysql');


module.exports =  function () {
    return connMySQL
};

var connMySQL = function () {
    
    console.log(' Connection with Database was estabilished')
    return mysql.createConnection({
    host: 'localhost',
    // host: 'mysql_app',// Container 
        port: 3306,
        user: 'root',
        password: 'gabrieric',
        database: 'mydatabase'
    });
}