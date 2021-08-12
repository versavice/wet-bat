module.exports = function(app, db) {
  
  app.get("/getTravellers", (req, res) => {  
    var sql = "SELECT * FROM traveller WHERE TravellerIsDeleted = 0"
    db.query(sql, (result) => {
      res.send(result);
    });
  });
};