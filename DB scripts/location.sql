CREATE TABLE location (
  `IdLocation` int NOT NULL AUTO_INCREMENT,
  `LocationCityName` varchar(45) NOT NULL,
  `LocationRegionName` varchar(45) NOT NULL,
  `LocationCountryName` varchar(45) NOT NULL,
  `LocationIsDeleted` bool DEFAULT 0,
  PRIMARY KEY (`IdLocation`)
)
