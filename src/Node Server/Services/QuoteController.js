module.exports = function(app, db) {
  
  app.get("/getQuotes", (req, res) => {  
    var sql = "CALL sp_QuoteList();"
    db.query(sql, (err, result) => {
      res.send(result);
    });
  });

  app.get("/getQuoteDetail/:quoteId", (req, res) => {  
    db.query("CALL sp_QuoteDetail(?)", req.params.quoteId
    , (err, result) => {
      res.send(result);
    });
  });
  
  app.get("/getPendingQuotes", (req, res) => {  
    var sql = "CALL sp_PendingQuoteList();"
    db.query(sql, (err, result) => {
      res.send(result);
    });
  });

  app.post("/updateQuote", (req, res) => {  
    db.query('INSERT INTO quote SET ?', req.body.quote, (err, result) => {
      res.send(result);

      if (err != null) {
        console.log(err);
      }
    });
  });
};