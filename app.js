var express = require ("express");
var app = express();
var port = 3000

app.set('view engine', 'ejs');


app.get("/", function(req,res){
	res.render("home/index")
});

app.get("/formulario_inclusao_noticia",function(req,res){
	res.render ("admin/form_add_noticia")
});

app.get("/tecnologia",function(req,res){
	res.render ("session/tecnologia")
});


app.listen(port,function(){
	console.log('express app listening on ' + port + ' (3050 on Host)')
});


