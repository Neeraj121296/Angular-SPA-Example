app.config(function($routeProvider,$locationProvider){
$locationProvider.hashPrefix('');
    $routeProvider.when("/",{
templateUrl:"aboutus.html"
    }).when("/contact/:firstname/:lastname",{
		templateUrl:"contactus.html",
		controller:"contactctrl"
	})
.when("/profile",{
		template:"<h1>Profile </h1>"
	})
	.when("/mobiles",{
		templateUrl:"mobile.html"
	})
	.when("/profile",{
		template:"<h1>Profile </h1>"
	})
	.otherwise({redirectTo:"/"});
	
})