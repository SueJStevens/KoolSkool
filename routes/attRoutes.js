//attendence files
var db = require("../models");
module.exports = function(app) {
  app.get("/att", function(req, res) {
    res.render("att", {
      nav: true
    });
  });
  app.get("/photo-attendence", function(req, res) {
    res.render("photo-attendence", {
      nav: true
    });
  });

  //USING THIS TO RENDER COURSE NAMES ONTO THE FILE
  // app.get("/attendence", function(req, res) {
  //   db.Course.findAll({}).then(function(dbCourse) {
  //     db.student_course_map.findAll({}).then(function(dbSCM) {
  //       db.Students.findAll({}).then(function(dbStudents) {
  //         console.log(dbSCM);
  //         res.render("attendence", {
  //           course: dbCourse,
  //           scm: dbSCM,
  //           students: dbStudents
  //         });
  //       });
  //     });
  //   });
  // });
  app.get("/attendence", function(req, res) {
    db.Course.findAll({
      include: [
        {
          model: db.Students,
          as: "course_students",
          through: "student_course_map",
          foreignKey: "student_id"
        }
      ]
    }).then(function(dbCourse) {
      res.render("attendence", {
        course: dbCourse
        // scm: dbSCM,
        // students: dbStudents
      });
    });
  });
}; //end module.exports
