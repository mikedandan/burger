//import the mysql connection
var connection = require("../config/connection.js");


// Helper function for generating '?' to use in MySQL statements
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

//This function pushes 'key value'='value of key' and returns it as a string
function objToSql(myObj) {
    var arr = [];

    for (var key in myObj) {
        arr.push(key + "=" + myObj[key]);
    }

    return arr.toString();
}

var orm = {
    // Function that returns all table entries
    selectAll: function (tableInput, cb) {
        // Construct the query string that returns all rows from the target table
        var queryString = "SELECT * FROM " + tableInput + ";";

        // Perform the database query that we built into queryString and return the results in...result!
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }

            // The callback function returns the result
            cb(res);
        });
    },

    // Function that inserts one row into a table. "cb" is, as usual, our trusty callback function
    insertOne: function (table, cols, vals, cb) {
        // Construct a query to insert one row into the table
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function (err, res) {
            if (err) {
                throw err;
            }

            // The callback function returns the result
            cb(res);
        });
    },

    // Function to update one burger in the table
    updateOne: function (table, objColVals, condition, cb) {
        // Construct the query string that updates a single entry in the target table
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }

            // The callback function returns the result
            cb(res);
        });
    }
};


module.exports = orm;