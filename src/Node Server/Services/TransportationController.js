module.exports = function(app, db) {
  
  app.get("/getTransportations", (req, res) => {  
    var sql = "SELECT * FROM transportation"
    db.query(sql, (err, result) => {
      res.send(result);
    });
  });
};