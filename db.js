
// we are creating this file to connect to database.
const Pool = require("pg").Pool     // this allow us to set config where we want to connect db.

// create instance of pool for configuration of object use to connect to db

const pool = new Pool({
    user: "postgres",
    database: "todo_database",
    host: "localhost",
    port: "5432"
})
module.exports = pool; // exports this would this module available to the outside 