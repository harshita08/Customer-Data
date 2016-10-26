var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {

	index: function(req,res){
		Customer.find({}, function(err, customers){
			if(err){
				console.log('Error encountered');
				res.json(err);
			} else{
				res.json(customers);
			}
		})
	},

	create: function(req,res){
		var customer = new Customer({name: req.body.name, city: req.body.city, age:req.body.age});
		customer.save(function(err){
			if(err){
				console.log('Error encountered');
				res.json(err);
			} else{
				res.json(customer);
			}
		})
	},

	delete: function(req,res){
		Customer.remove({_id: req.params.id}, function(err){
			if(err){
				console.log("Error encountered");
			} else{
				Customer.find({}, function(err, customers){
					if(err){
						console.log("Error....");
						res.json(err);
					}else{
						res.json(customers);
					}
				})
			}
		})
	},

	findOne: function(req,res){
		Customer.findOne({_id: req.params.id}, function(err, customer){
			if(err){
				console.log("Error encountered");
				res.json(err);
			}else{
				res.json(customer);
			}
		})
	},

	update: function(req,res){
		Customer.findOne({_id: req.params.id}, function(err, customer){
			if(err){
				console.log("Error...");
			} else{
				if(req.body.name)
					customer.name = req.body.name;
				if(req.body.city)
					customer.city = req.body.city;
				if(req.body.age)
					customer.age = req.body.age;
				customer.save(function(err){
					if(err){
						console.log("Error encountered");
					} else{
						Customer.find({}, function(err, customers){
							if(err){
								res.json(err);
							} else {
								res.json(customers);
							}
						})
					}
				})
			}
		})
	}
	
}

