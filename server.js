const inquirer = require("inquirer");
// const mysql = require("mysql");
const cTable = require("console.table");
const db = require("./db/dba");

function userInput() {
    inquirer.prompt([
      {
        name: "options",
        type: "list",
        message: "What do you want to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit"
        ]
      }
    ]).then(response => {
      switch (response.options) {
        case "View All Employees":
          console.log("hahaha")
          db.fetchAllEmployees()
            .then(([employees]) => {
              console.log("\n");
              console.table(employees)
              userInput();
            })
            .catch(err => {
              console.log("err = ", err)
            })
            
          break;
        case "Add Employee":
          addEmployee(() => getUserInput());
          break;
        case "Update Employee Role":
          updateRole(() => getUserInput());
          break;
        case "View All Roles":
          console.log("Case ViewAllRoles");
          db.fetchAllRoles()
            .then(([roles]) => {
              console.log("\n");
              console.table(roles)
              userInput()
            });
            
          
          break;
        case "Add Role":
          addRole(() => getUserInput());
          break;
        case "View All Departments":
          // viewAllDepartments(() => {
            db.fetchAllDepartments()
            .then(([depts]) => {
              console.log("\n");
              console.table(depts)
              userInput()
            });
            
          // });
          break;
        case "Add Department":
          inquirer.prompt([
            {
              name: "name",
              message: "Give the name of the department"
            }
          ])
          .then(resp => {
            let name = resp.name;
            db.addDepartment(name)
            .then(() =>{ 
              console.log(name + " is added to department table")
              getUserInput})
          })
          break;
        case "Quit":
          console.log("Press Ctrl + C to exit");
          break;
        default:
          console.log("Invalid option");
          getUserInput();
          break;
      }
    });
  }
  userInput();