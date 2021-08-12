DROP PROCEDURE sp_PendingQuoteList;
DELIMITER //
CREATE PROCEDURE sp_PendingQuoteList()
BEGIN
	select 
		q.IdQuote, 
        q.ContactName, 
        destinationL.LocationCityName as DestinationCity, 
        destinationL.LocationAirportCode as DestinationCode, 
        departureL.LocationCityName as DepartureCity, 
        departureL.LocationAirportCode as DepartureCode,
        q.IsPending
	from quote q
	JOIN Location destinationL on q.IdLocationDestination = destinationL.IdLocation
	JOIN Location departureL on q.IdLocationDeparture = departureL.IdLocation
    WHERE q.IsDeleted = 0 AND q.IsPending = 1;
END//


CALL sp_PendingQuoteList()