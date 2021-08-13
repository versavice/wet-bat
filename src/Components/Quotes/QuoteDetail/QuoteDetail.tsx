import React from "react";
import './QuoteDetail.css';
import { QuoteService } from "../../../Services/QuoteService";
import { Quote } from "../../../Models/Quote/Quote";
import { DashboardCard } from "../../DashboardCard/DashboardCard";
import CircularProgress from '@material-ui/core/CircularProgress';
import format from 'date-fns/format'

export class QuoteDetail extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = { quote: new Quote(), quoteLoaded: false };
        this.loadQuoteDetail();
    }

    loadQuoteDetail() {
        QuoteService.getQuoteDetail(this.props.id).then(res => {
            if (res) {
                this.setState({ quote: res[0], quoteLoaded: true });
                console.log(this.state.quote)
            }
        })
    }

    render() {
        if (this.props.id) {
            let q = this.state.quote;
            return (
                <DashboardCard name={"Quote #" + q.IdQuote} growHeight={true} growWidth={true}>
                    <div key="content">

                        {this.state.quoteLoaded
                            ?
                            <React.Fragment>
                                <div className="quote-detail-row">
                                    Flight departs: {
                                        format(new Date(q.DateDeparture), "PP")
                                    }
                                </div>
                                <div className="quote-detail-row">
                                    {q.DepartureCity + " (" + q.DepartureCode + ")"}
                                    <i className="mx-2 bi bi-arrow-right quote-detail-travel-arrow"></i>
                                    {q.DestinationCity + " (" + q.DestinationCode + ")"}
                                </div>
                                <div className="quote-detail-row">
                                    Returns on: {
                                        format(new Date(q.DateReturn), "PP")
                                    }
                                </div>
                                <div className="quote-detail-row">
                                    Transportation: {
                                        q.TransportationName
                                    }
                                </div>
                                <div className="quote-detail-row">
                                    Travellers: {
                                        q.Travellers
                                    }
                                </div>
                                <div className="quote-detail-row">
                                    Pending: {
                                        <React.Fragment>
                                            {q.IsPending === 1
                                                ? "Yes"
                                                : "No"
                                            }
                                        </React.Fragment>
                                    }
                                </div>
                            </React.Fragment>
                            :
                            <CircularProgress color="secondary" />
                        }
                    </div>
                </DashboardCard>
            );
        } else {
            return null;
        }
    }

}

