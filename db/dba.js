const connection = require("./connection");

class DBA {
    // Keeping a reference to the connection on the class in case we need it later
    constructor(connection) {
      this.connection = connection;
    }
  }
  module.exports = new DBA(connection);
  