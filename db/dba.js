const connection = require("../connection");

class DBA {
    // Keeping a reference to the connection on the class in case we need it later
    constructor(connection) {
        this.connection = connection;
    }
    fetchAllDepartments() {
        return this.connection.promise().query(
            "SELECT department.id, department.name FROM department;"
        );
    }

    fetchAllRoles() {
        return this.connection.promise().query(
            "SELECT role.id, role.title, role.salary, department.name AS dept FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }

    fetchAllEmployees() {
        console.log("bababa")
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS dept, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
        );
    }

}
module.exports = new DBA(connection);
