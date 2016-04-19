var app = angular.module('myApp', []);

app.controller('tasksController', function($scope, $http) {
  $scope.addTask = function (task, status) {
    $http.post("ajax/addTask.php?task="+task+"&status="+status)
  };
 
});

/*
aa.open("GET","main_1.php?fname="+fname+"&lname="+lname+"&rucomming="+rucomming+"&nofguest="+nofguest+"&foodcategory="+foodcategory+"&currentdate="+currentdate+"&currenttime="+currenttime,true);
aa.send();
*/