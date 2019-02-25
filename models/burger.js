var orm = require("../config/orm.js");

// Create a burger object
var burger = {
    // Select all burger entries
    selectAll: function(cb) {
      orm.selectAll('burgers', function(res) {
        cb(res);
      });
    },
  
    // This function calls the ORM single insert function.
    insertOne: function(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, function(res) {
        cb(res);
      });
    },
  
    // objColVals is an object specifying columns as object keys with associated values
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for use by burgers_controller.js
  module.exports = burger;
