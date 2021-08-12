module.exports = function(app, db) {
  
  app.get("/getLocations", (req, res) => {  
    var sql = "SELECT * FROM location WHERE LocationIsDeleted = 0"
    db.query(sql, (err, result) => {
      res.send(result);
    });
  });
};