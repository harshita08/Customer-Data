(function(){

	angular
		.module("myApp")
		.controller("customersCtrl", customersController);

		customersController.$inject = ['customerFactory', '$location', '$routeParams'];

		function customersController(customerFactory, $location, $routeParams){
			var vm = this;
			vm.addCustomer = addCustomer;
			vm.setCustomers = setCustomers;
			vm.deleteCustomer = deleteCustomer;
			vm.displayCustomers = displayCustomers;
			vm.getOneCustomer = getOneCustomer;
			vm.setOneCustomer = setOneCustomer;
			vm.editCustomer = editCustomer;
			vm.newCustomer = {};
			vm.allCustomers = [];
			vm.oneCustomer = {};
			vm.updateCustomer = {};

			customerFactory.getCustomers(function(data){
				vm.allCustomers = data;
			})

			if($routeParams.id){
				getOneCustomer($routeParams.id);
			}

			function addCustomer(){
				customerFactory.addCustomer(vm.newCustomer, setCustomers);
			}
			function setCustomers(data){
				vm.newCustomer = {};
				$location.url('/display');
			}
			function deleteCustomer(index){
				customerFactory.deleteCustomer(index, displayCustomers);
			}
			function displayCustomers(data){
				vm.allCustomers = data;
			}
			function getOneCustomer(index){
				customerFactory.getOneCustomer(index, setOneCustomer);
			}
			function setOneCustomer(customer){
				vm.oneCustomer = customer;
			}
			function editCustomer(index){
				customerFactory.editCustomer(index, vm.updateCustomer, function(data){
					vm.allCustomers = data;
					$location.url('/display');
				})
			}
		}

})();






