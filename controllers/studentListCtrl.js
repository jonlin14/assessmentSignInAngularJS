myApp.controller('studentListCtrl', function studentListCtrl($scope, studentsFactory) {
  $scope.students = studentsFactory.students;
  
})
