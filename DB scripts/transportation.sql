CREATE TABLE `transportation` (
  `IdTransportation` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IdTransportation`)
);
insert into transportation (IdTransportation, Name) VALUES (-1, "N/A");
insert into transportation (Name) VALUES ("Taxi");
insert into transportation (Name) VALUES ("Bus");
insert into transportation (Name) VALUES ("Rental Car");