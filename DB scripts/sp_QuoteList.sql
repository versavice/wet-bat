DROP PROCEDURE sp_QuoteList;
DELIMITER //
CREATE PROCEDURE sp_QuoteList()
BEGIN
	select 
		q.IdQuote, 
        q.ContactName, 
        destinationL.LocationCityName as DestinationCity, 
        departureL.LocationCityName as DepartureCity, 
        q.IsPending
	from quote q
	JOIN Location destinationL on q.IdLocationDestination = destinationL.IdLocation
	JOIN Location departureL on q.IdLocationDeparture = departureL.IdLocation
    WHERE q.IsDeleted = 0;
END//


CALL sp_QuoteList()