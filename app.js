var express = require('express');
var app = express();

app.use('/',express.static('public'));

app.listen("3000",function(){ 
	console.log("Server Started");
});

app.set('view engine','pug');

// app.get('/',function(req,res){
// 	res.render('index')
// })