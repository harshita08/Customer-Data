var mongoose = require('mongoose');
var customers = require('../controllers/customers.js');

module.exports = function(app){

	app.post('/customers', function(req,res){
		customers.create(req,res);
	})

	app.get('/customers', function(req,res){
		customers.index(req,res);
	})

	app.delete('/customers/:id', function(req,res){
		customers.delete(req,res);
	})

	app.get('/customers/:id', function(req,res){
		customers.findOne(req,res);
	})

	app.put('/customers/:id', function(req,res){
		customers.update(req,res);
	})
	
}