
var fs = require('fs');
var ejs = require('ejs');


exports.PizzaMenu_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/Patients_OneItem.ejs', "utf8"));

exports.PizzaCart_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/unUse_OneItem.ejs', "utf8"));
