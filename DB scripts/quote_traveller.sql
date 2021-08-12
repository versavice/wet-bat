CREATE TABLE `quote_traveller` (
  `IdQuote` int NOT NULL,
  `IdTraveller` int NOT NULL,
  KEY `Constr_traveller_fk` (`IdTraveller`),
  CONSTRAINT `Constr_traveller_fk` FOREIGN KEY (`IdTraveller`) REFERENCES `traveller` (`IdTraveller`) ON DELETE CASCADE ON UPDATE CASCADE,
  KEY `Constr_quote_fk` (`IdQuote`),
  CONSTRAINT `Constr_quote_fk` FOREIGN KEY (`IdQuote`) REFERENCES `quote` (`IdQuote`) ON DELETE CASCADE ON UPDATE CASCADE
) 
