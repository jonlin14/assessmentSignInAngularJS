myApp.controller('studentsCtrl', function studentsCtrl($scope, studentsFactory) {
  $scope.students = studentsFactory.students;
  $scope.presence = function(item) {
    studentsFactory.studentPresence(item);
  }
})
