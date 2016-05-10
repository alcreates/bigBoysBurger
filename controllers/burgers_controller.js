var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req, res){

	burger.selectAllBurger(function(burger_data){
		res.render('index', {burger_data});
	});
});

router.post('/create', function(req, res){

	burger.addBurger(req.body.burger, function(result){

		console.log(result);
		res.redirect('/');

	});
});


router.put('/update', function(req, res){
	burger.eatBurger(req.body.burger_id, function(result){
		console.log(result);
		res.redirect('/');
	});
});


module.exports = router; 
