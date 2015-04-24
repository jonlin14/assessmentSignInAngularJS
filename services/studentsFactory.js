myApp.factory('studentsFactory', function studentsFactory() {
  var factory = {}
  factory.students = [ {name : 'John'}, {name: 'Harold'} ]

  factory.studentPresence = function(presence) {
    if (presence.present === false) {
      presence.present = true;
    }
    else {
      presence.present = false;
    }
  }
  return factory;
})
