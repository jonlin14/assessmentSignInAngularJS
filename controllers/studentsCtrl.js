myApp.controller('studentsCtrl', function studentsCtrl($scope, studentsFactory) {
  $scope.students = studentsFactory.students;
  $scope.factory = studentsFactory;
  $scope.presence = function(item) {
    studentsFactory.studentPresence(item);
  }
})
