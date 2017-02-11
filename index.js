var express = require('express');
var app = express();

app.use('/',express.static('html'));
app.use('/libs',express.static('bower_components'));
app.use('/assets',express.static('assets'));


app.listen("3000",function(){
	console.log("Server Started at port 3000");
});

app.set('view engine','pug');

// app.get('/',function(req,res){
// 	res.render('index')
// })
