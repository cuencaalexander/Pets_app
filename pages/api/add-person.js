const db = require("../../db/connection");

export default function add_person(req, res) {
  if (req.method === "POST") {
    var sql =
      "INSERT INTO Person (first_name, height, pet_name) VALUES(?, ?, ?)";
    var params = [req.body.first_name, req.body.height, req.body.pet_name];
    db.run(sql, params, (err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
    res.status(200).json({ message: "success" });
  }
  if (req.method === "DELETE") {
    var sql = `DELETE FROM Person WHERE id=?`;
    var params = [req.body.id];
    db.run(sql, params, (err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
    res.status(200).json({ message: "success" });
  }
  if (req.method === "PUT") {
    var sql = `UPDATE Person SET first_name=?, height=? WHERE id=?`;
    var params = [req.body.first_name, req.body.height, req.body.id];
    db.run(sql, params, (err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
    res.status(200).json({ message: "success" });
  }
}
