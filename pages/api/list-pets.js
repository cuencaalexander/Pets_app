const db = require("../../db/connection");

export default function list_pets(req, res) {
  if (req.method === "GET") {
    var sql = "select * from Pet";
    db.all(sql, [], (err, rows) => {
      if (err) {
        return res.status(400).json(err).end();
      } else {
        return res.status(200).json({
          message: "success",
          data: rows,
        });
      }
    });
  }
}
