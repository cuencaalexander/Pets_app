const db = require("../../db/connection");

export default function list_people(req, res) {
  if (req.method === "GET") {
    var sql = "select * from Person";
    let error = false;
    let data = null;
    db.all(sql, [], (err, rows) => {
      if (err) {
        res.status(400).json(err).end();
      } else {
        res.status(200).json({
          message: "success",
          data: rows,
        });
      }
    });
  }
}
