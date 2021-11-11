const sqlite3 = require("sqlite3");

let dbFile = "./db/myDbFile.db";

let db = new sqlite3.Database(
  dbFile,
  sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE, /// optional connection modes
  (err) => {
    if (!err) {
      console.log("Successfully created DB file: " + dbFile); /// log success
    } else {
      console.log("Failed to create DB file: " + dbFile + ". Error: " + err); /// log error
    }
  }
);

// run the queries serially instead of in parallel
db.serialize(() => {
  //- create the database schemas
  //
  db.run(`
		CREATE TABLE IF NOT EXISTS Pet (
			id integer PRIMARY KEY AUTOINCREMENT,
			name varchar,
			owner_name varchar,
			dob varchar
		);
	`);

  db.run(`
	CREATE TABLE IF NOT EXISTS Person (
		id integer PRIMARY KEY AUTOINCREMENT,
		first_name varchar,
		height varchar,
		pet_name varchar
	);
`);
});

/**
 *  You don't need to worry about closing the database.
 *  When you call prepare or execute , those calls automatically call close when they are done.
 *  There is an internal rescue/ensure block that ensures the db is closed even if an error is raised.
 */

// db.close((err)=>{
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Closed the database connection.');
// })

/// export the connection to be used elsewhere
module.exports = db;
