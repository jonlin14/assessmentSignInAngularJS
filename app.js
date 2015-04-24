var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider){
  $stateProvider.state("home", {
    url:"",
    templateUrl: "partials/home.html",
    controller: "studentsCtrl"
  });
  $stateProvider.state("signIn", {
    url:"sign-in",
    templateUrl: "partials/signIn.html",
    controller: "studentsCtrl"
  });
  $stateProvider.state("presence", {
    url:"presence",
    templateUrl: "partials/presence.html",
    controller: "studentListCtrl"
  });

})
