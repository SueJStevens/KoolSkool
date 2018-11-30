// var db = require("../models");

var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup");
};

exports.login = function(req, res) {
  res.render("login");
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};

exports.admin = function(req, res) {
  res.render("admin");
};

exports.logout = function(req, res) {
  // eslint-disable-next-line no-unused-vars
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};