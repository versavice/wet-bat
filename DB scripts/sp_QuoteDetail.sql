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


