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

CREATE TABLE `transportation` (
  `IdTransportation` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IdTransportation`)
);
insert into transportation (IdTransportation, Name) VALUES (-1, "N/A");
insert into transportation (Name) VALUES ("Taxi");
insert into transportation (Name) VALUES ("Bus");
insert into transportation (Name) VALUES ("Rental Car");

CREATE TABLE `traveller` (
  `IdTraveller` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IdTraveller`)
);

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
  PRIMARY KEY (`IdQuote`),
  CONSTRAINT `Constr_destination_fk` FOREIGN KEY (`IdLocationDestination`) REFERENCES `location` (`IdLocation`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Constr_departure_fk` FOREIGN KEY (`IdLocationDeparture`) REFERENCES `location` (`IdLocation`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Constr_transportation_fk` FOREIGN KEY (`IdTransportation`) REFERENCES `transportation` (`IdTransportation`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `quote_traveller` (
  `IdQuote` int NOT NULL,
  `IdTraveller` int NOT NULL,
  KEY `Constr_traveller_fk` (`IdTraveller`),
  CONSTRAINT `Constr_traveller_fk` FOREIGN KEY (`IdTraveller`) REFERENCES `traveller` (`IdTraveller`) ON DELETE CASCADE ON UPDATE CASCADE,
  KEY `Constr_quote_fk` (`IdQuote`),
  CONSTRAINT `Constr_quote_fk` FOREIGN KEY (`IdQuote`) REFERENCES `quote` (`IdQuote`) ON DELETE CASCADE ON UPDATE CASCADE
);

DELIMITER //
CREATE PROCEDURE sp_QuoteList()
BEGIN
	select 
		q.IdQuote, 
        q.ContactName, 
        q.PeopleCount as Travellers,
        destinationL.LocationCityName as DestinationCity, 
        destinationL.LocationAirportCode as DestinationCode, 
        departureL.LocationCityName as DepartureCity, 
        departureL.LocationAirportCode as DepartureCode, 
        q.DateReturn,
        q.DateDeparture,
        t.Name as TransportationName,
        q.IsPending
	from quote q
	JOIN location destinationL on q.IdLocationDestination = destinationL.IdLocation
	JOIN location departureL on q.IdLocationDeparture = departureL.IdLocation
	JOIN transportation t on q.IdTransportation = t.IdTransportation
    WHERE q.IsDeleted = 0;
END//

DELIMITER //
CREATE PROCEDURE sp_PendingQuoteList()
BEGIN
	select 
		q.IdQuote, 
        q.ContactName, 
        destinationL.LocationCityName as DestinationCity, 
        departureL.LocationCityName as DepartureCity
	from quote q
	JOIN Location destinationL on q.IdLocationDestination = destinationL.IdLocation
	JOIN Location departureL on q.IdLocationDeparture = departureL.IdLocation
    WHERE q.IsDeleted = 0 AND q.IsPending = 1;
END//

DELIMITER //
CREATE PROCEDURE sp_QuoteDetail(IN quoteId int)
BEGIN
	select 
		q.IdQuote, 
        q.ContactName, 
        q.PeopleCount as Travellers,
        destinationL.LocationCityName as DestinationCity, 
        destinationL.LocationAirportCode as DestinationCode, 
        departureL.LocationCityName as DepartureCity, 
        departureL.LocationAirportCode as DepartureCode, 
        q.DateReturn,
        q.DateDeparture,
        t.Name as TransportationName,
        q.IsPending
	from quote q
	JOIN location destinationL on q.IdLocationDestination = destinationL.IdLocation
	JOIN location departureL on q.IdLocationDeparture = departureL.IdLocation
	JOIN transportation t on q.IdTransportation = t.IdTransportation
    WHERE q.IsDeleted = 0 AND q.IdQuote = quoteId;
END//

