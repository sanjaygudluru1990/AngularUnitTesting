(function(){
	'use strict';
	angular.module("app",["ui.router"]).config(routeConfig);

	function routeConfig($stateProvider, $urlRouterProvider){
  		$urlRouterProvider.otherwise("/home");
		$stateProvider
		    .state('home', {
		      url: "/home",
		      templateUrl: "app/home/home.html",
		      controllerAs: "homeController as hvm"
		    })
		    .state('login', {
		      url: "/login",
		      templateUrl: "app/login/login.html",
		      controllerAs: "loginController as lvm"
		    });
	}
})();