const connection = require("./connection");

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
    
  }
  module.exports = new DBA(connection);
  