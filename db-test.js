const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const setup = async () => {
  try {
    // const db = await sqlite.open({
    //   filename: "./petsdb.sqlite",
    //   driver: sqlite3.Database,
    // });
    // await db.migrate({
    //   migrationsPath: "./pets.sqlite3",
    //   force: "last",
    // });
    let db = new sqlite3.Database("./db/pets.db", (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Connected to the chinook database.");
    });
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Close the database connection.");
    });
  } catch (err) {
    console.log(err);
  }
};
setup();
