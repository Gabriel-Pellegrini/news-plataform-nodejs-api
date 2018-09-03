var app = require("./config/server");
var port = 3000;


 app.listen(port,function(){
	console.log('express app listening on ' + port + ' (3050 on Host)');
});
