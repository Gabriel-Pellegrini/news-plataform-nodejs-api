var app = require("./config/server");
var port = 3000;

/* //Página inicial para o app
var routeHome= require("./app/routes/home")(app);

//Sessões para noticias
var routeNoticias= require("./app/routes/noticias")(app);

// Inclusão de Noticias.
var routeInclusao= require("./app/routes/form_inclusao_noticia")(app);
 */

 app.listen(port,function(){
	console.log('express app listening on ' + port + ' (3050 on Host)');
});
