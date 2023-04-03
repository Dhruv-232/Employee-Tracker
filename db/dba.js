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
        console.log("Inside fetchAllRoles")
        return this.connection.promise().query(
            "SELECT role.id, role.title, role.salary, department.name AS dept FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }

}
module.exports = new DBA(connection);
