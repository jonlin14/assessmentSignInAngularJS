myApp.factory('studentsFactory', function studentsFactory() {
  var factory = {}
  factory.students = [ {name : 'John', present: false}, {name: 'Harold', present: false}, {name: 'James', present: false} ]

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
