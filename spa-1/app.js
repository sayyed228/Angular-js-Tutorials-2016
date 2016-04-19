var app = angular.module('myApp',['ngRoute']);

/*app.controller('myCtrl',function($scope){
 $scope.firstName = 'Nazir';    
 $scope.lastName  = 'Sayyed';
 $scope.fullName = function(){
     return $scope.firstName+' '+$scope.lastName;
 }
 */


app.config(function($routeProvider){
    $routeProvider
    
    .when('/',{
          templateUrl : 'templates/home.html',
          controller : 'homeCtrl'
          })
    
    .when('/About',{
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
    })
    
    .when('/Contact',{
        templateUrl: 'templates/contact.html',
         controller: 'contactCtrl'
    })
		
});

app.controller('homeCtrl',function($scope){
    $scope.heading ='Home page';
	$scope.description ='Welcome to'+' '+$scope.heading;
});

app.controller('aboutCtrl',function($scope){
    $scope.heading ='About page';
	$scope.description ='Welcome to'+' '+$scope.heading;
});

app.controller('contactCtrl',function($scope){
    $scope.heading ='Contact page';
	$scope.description ='Welcome to'+' '+$scope.heading;
});



