import React from "react";
import './QuoteForm.css';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { LocationService } from "../../../Services/LocationService";
import { TransportationService } from "../../../Services/TransportationService";
import { QuoteService } from "../../../Services/QuoteService";
import { Quote } from "../../../Models/Quote/Quote";
import format from 'date-fns/format'

export class QuoteForm extends React.Component<any, any>  {

    constructor(props) {
        super(props);
        this.createQuote = this.createQuote.bind(this);
        this.quoteValid = this.quoteValid.bind(this);

        this.state = {
            locations: [],
            locationsLoading: false,
            transportations: [],
            transportationsLoading: false,

            // form 
            departureLocation: -1,
            destinationLocation: -1,
            departureDate: null,
            returnDate: null,
            peopleCount: 1,
            transportation: -1,
            contactName: ""
        };

    }

    componentDidMount() {
        this.loadLocations();
        this.loadTransportations();
    }

    quoteValid(): boolean {
        var valid = false;
        if (this.state.departureLocation > 0 &&
            this.state.destinationLocation > 0 &&
            this.state.departureDate != null
        ) {
            valid = true;
        }
        return valid;
    }

    createQuote() {
        if (this.quoteValid()) {
            this.setState({ saving: true });
            var quote = new Quote();
            quote.IdLocationDeparture = this.state.departureLocation;
            quote.IdLocationDestination = this.state.destinationLocation;
            quote.IdTransportation = this.state.transportation;
            quote.DateDeparture = format(this.state.departureDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
            quote.DateReturn = this.state.returnDate ? format(this.state.returnDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx") : null;
            quote.PeopleCount = this.state.peopleCount;
            quote.ContactName = this.state.contactName;
            QuoteService.updateQuote(quote).then(x => {
                // var isSuccess = false;  // test fail 
                var isSuccess = x.status >= 200 && x.status < 300;
                this.saveResult(isSuccess);
                this.setState({ saving: false });
                if (isSuccess) {
                    this.clearForm();
                }
            });
        }
    }

    saveResult(success: boolean) {
        if (success) {
            this.setState({ saveSuccess: true });
        } else {
            this.setState({ saveFail: true });
        }

        // auto remove success overlay after 2 sec
        setTimeout(() => {
            this.setState({ saveSuccess: false });
        }, 2000);
    }

    clearForm() {
        this.setState({
            departureLocation: -1,
            destinationLocation: -1,
            departureDate: null,
            returnDate: null,
            peopleCount: 1,
            transportation: -1,
            contactName: ""
        });
    }

    loadLocations() {
        this.setState({ locationsLoading: true });
        LocationService.getLocations().then((res) => {
            this.setState({ locations: res.data, locationsLoading: false });
        }).catch(e => {
            this.setState({ transportationsLoading: false });
        });
    }

    loadTransportations() {
        this.setState({ transportationsLoading: true });
        TransportationService.getTransportations().then((res) => {
            this.setState({ transportations: res.data, transportationsLoading: false });
        }).catch(e => {
            this.setState({ transportationsLoading: false });
        });
    }

    render() {
        return (
            <div className="quote-form">
                {this.state.saving &&
                    <div className="card-overlay">
                        <CircularProgress color="secondary" />
                    </div>
                }
                {this.state.saveSuccess &&
                    <div className="card-overlay success-bg">
                        <i style={{ color: "green" }} className="bi bi-check-lg"></i>
                    </div>
                }
                {this.state.saveFail &&
                    <div onClick={() => this.setState({ saveFail: false })} className="card-overlay fail-bg">
                        <i style={{ color: "red" }} className="p-0 bi bi-x-lg"></i>
                        <div className="fail-message">Server Error</div>
                    </div>
                }
                <div className="form-row">
                    <FormControl required className="input me-2" disabled={this.state.locationsLoading}>
                        <InputLabel id="depart-select">Departure</InputLabel>
                        <Select
                            labelId="depart-select"
                            value={this.state.departureLocation}
                            onChange={element => this.setState({ departureLocation: element.target.value })}
                        >
                            <MenuItem value={-1}><em>Select</em></MenuItem>
                            {this.state.locations.map(location =>
                                <MenuItem key={location.IdLocation} value={location.IdLocation}>
                                    {location.LocationCityName + ", " + location.LocationCountryName}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>

                    <FormControl required className="input" disabled={this.state.locationsLoading}>
                        <InputLabel id="destination-select">Destination</InputLabel>
                        <Select
                            labelId="destination-select"
                            value={this.state.destinationLocation}
                            onChange={element => this.setState({ destinationLocation: element.target.value })}
                        >
                            <MenuItem value={-1}><em>Select</em></MenuItem>
                            {this.state.locations.map(location =>
                                <MenuItem key={location.IdLocation} value={location.IdLocation}>
                                    {location.LocationCityName + ", " + location.LocationCountryName}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </div>

                <div className="form-row">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker className="input"
                            disableToolbar
                            required
                            label="Depart Date"
                            value={this.state.departureDate}
                            onChange={date => this.setState({ departureDate: date })}
                        />
                        <KeyboardDatePicker className="input"
                            disableToolbar
                            label="Return Date"
                            value={this.state.returnDate}
                            onChange={date => this.setState({ returnDate: date })}
                        />
                    </MuiPickersUtilsProvider>
                </div>

                <div className="form-row">
                    <TextField className="input" id="standard-basic" type="number" label="Travellers"
                        value={this.state.peopleCount} onChange={element => this.setState({ peopleCount: element.target.value })} />

                    <FormControl className="input" disabled={this.state.transportationsLoading}>
                        <InputLabel id="transport-select">Transportation</InputLabel>
                        <Select
                            labelId="transport-select"
                            value={this.state.transportation}
                            onChange={element => this.setState({ transportation: element.target.value })}
                        >
                            <MenuItem value={-1}><em>N/A</em></MenuItem>
                            {this.state.transportations.map(transportation =>
                                <MenuItem key={transportation.IdTransportation} value={transportation.IdTransportation}>
                                    {transportation.Name}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </div>

                <div className="form-row">
                    <TextField className="input" id="standard-basic" label="Name"
                        value={this.state.contactName} onChange={element => this.setState({ contactName: element.target.value })} />

                    <Button onClick={this.createQuote} disabled={!this.quoteValid()} className="bat-button" variant="contained" color="primary">Create Quote</Button>
                </div>
            </div>
        );
    }

}

