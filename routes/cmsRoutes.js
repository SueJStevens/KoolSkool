var db = require("../models");

module.exports = function(app) {
  // Load cms splash page
  app.get("/cms", function(req, res) {
    res.render("cms", {
      msg: "Welcome Professor Plum!",
      nav: true
    });
  });

  // Load parents data entry page
  app.get("/cms/parents", function(req, res) {
    res.render("parents", {
      nav: true
    });
  });

  // Create a new example
  app.post("/cms/api/parents", function(req, res) {
    db.Parents.create(req.body).then(function(dbParents) {
      res.json(dbParents);
    });
  });

  // Load parents data entry page
  app.get("/cms/personnel", function(req, res) {
    res.render("personnel", {
      nav: true
    });
  });

  // Create a new example
  app.post("/cms/api/personnel", function(req, res) {
    db.Personnel.create(req.body).then(function(dbPersonnel) {
      res.json(dbPersonnel);
    });
  });
}; //end module.exports
