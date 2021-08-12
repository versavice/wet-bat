DELIMITER //
CREATE PROCEDURE sp_QuoteList()
BEGIN
	select 
		q.IdQuote, 
        q.ContactName, 
        destinationL.LocationCityName as DestinationCity, 
        destinationL.LocationAirportCode as DestinationCode, 
        departureL.LocationCityName as DepartureCity, 
        departureL.LocationAirportCode as DepartureCode, 
        q.DateReturn,
        q.DateDeparture,
        q.IsPending
	from quote q
	JOIN Location destinationL on q.IdLocationDestination = destinationL.IdLocation
	JOIN Location departureL on q.IdLocationDeparture = departureL.IdLocation
    WHERE q.IsDeleted = 0;
END//
