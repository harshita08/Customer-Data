var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
		.when("/new", {
			templateUrl: "./partials/new.html"
		})
		.when("/display", {
			templateUrl: "./partials/showAll.html"
		})
		.when("/show/:id", {
			templateUrl: "./partials/show.html"
		})
		.when("/edit/:id", {
			templateUrl: "./partials/edit.html"
		})
		.otherwise({
			redirectTo: "/"
		});

})

app.factory("customersFactory")