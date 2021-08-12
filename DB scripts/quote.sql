CREATE TABLE quote (
  `IdQuote` int NOT NULL AUTO_INCREMENT,
  `IdLocationDeparture` int DEFAULT NULL,
  `IdLocationDestination` int DEFAULT NULL,
  `IdTransportation` int DEFAULT NULL,
  `DateDeparture` DATETIME DEFAULT NULL,
  `DateReturn` DATETIME DEFAULT NULL,
  `PeopleCount` int DEFAULT NULL,
  `ContactName` VARCHAR(100) DEFAULT NULL,
  `IsPending` bool DEFAULT 1,
  `IsDeleted` bool DEFAULT 0,
  PRIMARY KEY (`IdQuote`)
)
