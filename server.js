const mysql = require("mysql");
const inquirer = require("inquirer");
const figlet = require("figlet");

//figlet config
figlet("Employee Tracker", (err, data) => {
    if (err) throw err;
    console.log(data);
});