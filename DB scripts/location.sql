CREATE TABLE location (
  `IdLocation` int NOT NULL AUTO_INCREMENT,
  `LocationCityName` varchar(45) NOT NULL,
  `LocationCountryName` varchar(45) NOT NULL,
  `LocationAirportCode` varchar(45) NOT NULL,
  `LocationIsDeleted` bool DEFAULT 0,
  PRIMARY KEY (`IdLocation`)
);


insert into location (LocationCityName, LocationCountryName, LocationAirportCode) VALUES ("Calgary", "Canada", "YYC");
insert into location (LocationCityName, LocationCountryName, LocationAirportCode) VALUES ("London", "England", "LHR");
insert into location (LocationCityName, LocationCountryName, LocationAirportCode) VALUES ("Cancun", "Mexico", "CUN");