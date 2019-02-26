//require Express
var express = require("express");
//import burger.js files from models folder
var burger = require("../models/burger");

//create router variable
var router = express.Router();

//Create the routes
router.get('/', function(req, res) {

    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render('index', hbsObject);
    });
  });
  
  
  router.post('/', function(req, res) {
    burger.insertOne([
      'burger_name',
    ], [
      req.body.burger_name
  
    ], function(data) {
      res.redirect('/');
    });
  });
  
  
  router.post('/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });
  
  // Export routes for the server.js to use.
  module.exports = router;
