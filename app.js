var myApp = angular.module('myApp', []);

myApp.config(function($stateProvider){
  $stateProvider.state("home", {
    url:"",
    templateUrl: "partials/home.html"
  })
})
