const db = require("../../db/connection");

export default function add_pet(req, res) {
  if (req.method === "POST") {
    var sql = "INSERT INTO Pet (name, owner_name, dob) VALUES(?, ?, ?)";
    var params = [req.body.name, req.body.owner_name, req.body.dob];
    db.run(sql, params, (err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
    res.status(200).json({ message: "success" });
  }
  if (req.method === "PUT") {
    var sql = "UPDATE Pet SET name=?, dob=? WHERE id=?";
    var sql2 = "UPDATE Person SET pet_name=? WHERE id=?";

    var params = [req.body.name, req.body.dob, req.body.id];
    var params2 = [req.body.name, req.body.person_id];
    db.serialize(() => {
      db.run(sql, params, (err) => {
        if (err) {
          res.status(500).json(err);
        }
      });
      db.run(sql2, params2, (err) => {
        if (err) {
          res.status(500).json(err);
        }
      });
    });

    res.status(200).json({ message: "success" });
  }
  if (req.method === "DELETE") {
    var sql = "DELETE FROM Pet WHERE id=?";
    var sql2 = "UPDATE Person SET pet_name='' WHERE id=?";

    var params = [req.body.id];
    var params2 = [req.body.person_id];
    db.serialize(() => {
      db.run(sql, params, (err) => {
        if (err) {
          res.status(500).json(err);
        }
      });
      db.run(sql2, params2, (err) => {
        if (err) {
          res.status(500).json(err);
        }
      });
    });

    res.status(200).json({ message: "success" });
  }
}
