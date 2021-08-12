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
