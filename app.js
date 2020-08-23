const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/",function(req,res){
	res.render('Index');
});

app.get("/frontendprojects",function(req,res){
	res.render('frontproj');
});

app.get("/backendprojects",function(req,res){
	res.render('backproj');
});

app.get("/javaprojects",function(req,res){
	res.render('javaproj');
});

app.listen(3000,function(){
	console.log("Server is running on port 3000");
});