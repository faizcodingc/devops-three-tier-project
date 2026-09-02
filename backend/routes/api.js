const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/messages", (req, res) => {
  db.query("SELECT * FROM messages", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
});

module.exports = router;


router.post("/message", (req, res) => {
  const { message } = req.body;

  db.query(
    "INSERT INTO messages (message) VALUES (?)",
    [message],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        success: true,
        id: result.insertId,
      });
    }
  );
});
