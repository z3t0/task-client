// task Application
// by Rafi Khan

// Require Modules
task = require("./task.js")

var fs = require('fs')

// Variables
var datafile = "data.json"
var data = require('./data.js')({name: "default", file_name: datafile})

// Parse data
data.read()


// Helper Utilities
function error(msg) {
    console.log("error encountered: " + msg)
    process.exit(1)
}
