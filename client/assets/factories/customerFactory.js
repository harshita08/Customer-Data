(function(){

	angular
		.module("myApp")
		.factory("customerFactory", customerFactory);

		function customerFactory($http){
			var factory = {
				addCustomer: addCustomer,
				getCustomers: getCustomers,
				deleteCustomer: deleteCustomer,
				getOneCustomer: getOneCustomer,
				editCustomer: editCustomer
			};
			return factory;

			function addCustomer(newCustomer, callback){
				$http.post('/customers', newCustomer).success(function(Customer){
					callback(Customer);
				})
			}
			function getCustomers(callback){
				$http.get('/customers').success(function(Customers){
					callback(Customers);
				})
			}
			function deleteCustomer(index, callback){
				$http.delete('/customers/' + index).success(function(customers){
					callback(customers);
				})
			}
			function getOneCustomer(index, callback){
				$http.get('/customers/'+index).success(function(customer){
					callback(customer);
				})
			}
			function editCustomer(index, updateCustomer, callback){
				$http.put('/customers/'+index, updateCustomer).success(function(data){
					callback(data);
				})
			}
		}
})();