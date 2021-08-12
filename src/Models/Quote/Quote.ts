export class Quote {
    IdQuote?: number;
    IdLocationDeparture: number;
    IdLocationDestination: number;
    IdTransportation: number;
    DateDeparture: string;
    DateReturn: string;
    PeopleCount: number;
    ContactName: string;
    IsPending = true;
}
