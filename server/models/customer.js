var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name: String,
	city: String,
	age: Number
})

mongoose.model('Customer', CustomerSchema);