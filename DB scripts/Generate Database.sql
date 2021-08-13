CREATE DATABASE  IF NOT EXISTS `db-wet-bat` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db-wet-bat`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: db-wet-bat
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `IdLocation` int NOT NULL AUTO_INCREMENT,
  `LocationCityName` varchar(45) NOT NULL,
  `LocationCountryName` varchar(45) NOT NULL,
  `LocationIsDeleted` tinyint(1) DEFAULT '0',
  `LocationAirportCode` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IdLocation`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Calgary','Canada',0,'YYC'),(2,'London','England',0,'LHR'),(3,'Cancun','Mexico',0,'CUN');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote`
--

DROP TABLE IF EXISTS `quote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quote` (
  `IdQuote` int NOT NULL AUTO_INCREMENT,
  `IdLocationDeparture` int DEFAULT NULL,
  `IdLocationDestination` int DEFAULT NULL,
  `IdTransportation` int DEFAULT NULL,
  `DateDeparture` datetime DEFAULT NULL,
  `DateReturn` datetime DEFAULT NULL,
  `PeopleCount` int DEFAULT NULL,
  `ContactName` varchar(100) DEFAULT NULL,
  `IsPending` tinyint(1) DEFAULT '1',
  `IsDeleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`IdQuote`),
  KEY `Constr_destination_fk` (`IdLocationDestination`),
  KEY `Constr_departure_fk` (`IdLocationDeparture`),
  KEY `Constr_transportation_fk` (`IdTransportation`),
  CONSTRAINT `Constr_departure_fk` FOREIGN KEY (`IdLocationDeparture`) REFERENCES `location` (`IdLocation`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Constr_destination_fk` FOREIGN KEY (`IdLocationDestination`) REFERENCES `location` (`IdLocation`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Constr_transportation_fk` FOREIGN KEY (`IdTransportation`) REFERENCES `transportation` (`IdTransportation`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote`
--

LOCK TABLES `quote` WRITE;
/*!40000 ALTER TABLE `quote` DISABLE KEYS */;
INSERT INTO `quote` VALUES (20,1,3,1,'2021-10-01 17:22:00','2021-10-14 17:22:00',2,'Craig',1,0),(22,3,2,-1,'2021-08-14 13:30:00','2021-08-30 13:30:00',4,'Steve',1,0);
/*!40000 ALTER TABLE `quote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quote_traveller`
--

DROP TABLE IF EXISTS `quote_traveller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quote_traveller` (
  `IdQuote` int NOT NULL,
  `IdTraveller` int NOT NULL,
  KEY `Constr_traveller_fk` (`IdTraveller`),
  KEY `Constr_quote_fk` (`IdQuote`),
  CONSTRAINT `Constr_quote_fk` FOREIGN KEY (`IdQuote`) REFERENCES `quote` (`IdQuote`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Constr_traveller_fk` FOREIGN KEY (`IdTraveller`) REFERENCES `traveller` (`IdTraveller`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quote_traveller`
--

LOCK TABLES `quote_traveller` WRITE;
/*!40000 ALTER TABLE `quote_traveller` DISABLE KEYS */;
/*!40000 ALTER TABLE `quote_traveller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transportation`
--

DROP TABLE IF EXISTS `transportation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transportation` (
  `IdTransportation` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IdTransportation`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transportation`
--

LOCK TABLES `transportation` WRITE;
/*!40000 ALTER TABLE `transportation` DISABLE KEYS */;
INSERT INTO `transportation` VALUES (-1,'N/A'),(1,'Taxi'),(2,'Bus'),(3,'Rental Car');
/*!40000 ALTER TABLE `transportation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `traveller`
--

DROP TABLE IF EXISTS `traveller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `traveller` (
  `IdTraveller` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IdTraveller`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traveller`
--

LOCK TABLES `traveller` WRITE;
/*!40000 ALTER TABLE `traveller` DISABLE KEYS */;
/*!40000 ALTER TABLE `traveller` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-13 13:40:14
