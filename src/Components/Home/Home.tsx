import React from "react";
import './Home.css';
import '../../index.css';
import { QuoteForm } from "../Quotes/QuoteForm/QuoteForm";
import { DashboardCard } from "../DashboardCard/DashboardCard";
import { HeroCard } from "./HeroCard/HeroCard";
import { QuoteList } from "../Quotes/QuoteList/QuoteList";
import { QuoteService } from "../../Services/QuoteService";
import Button from '@material-ui/core/Button'

export class Home extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            pendingQuotes: [],
            pendingQuotesLoading: false,
        };
        this.loadHeroCounts = this.loadHeroCounts.bind(this);
        this.loadPendingQuotes = this.loadPendingQuotes.bind(this);

    }

    componentDidMount() {
        this.loadHeroCounts();
        this.loadPendingQuotes();
        this.loadLeads();
    }

    loadHeroCounts() {
        this.setState({ quotesLoading: true });
        QuoteService.getQuotes().then(res => {
            this.setState({ 
                quotes: res, 
                quoteCount: res.length, 
                quotesLoading: false 
            });
        }).catch(e => {
            alert("Failed to load pending quotes: " + e.message);
            this.setState({ 
                quotesLoading: false 
            });
        });
    }

    loadLeads() {
        setTimeout(() => {
            // simulate loading leads
            this.setState({leadCount: 101})
        }, 250);
    }

    loadPendingQuotes() {
        QuoteService.getPendingQuotes().then(res => {
            this.setState({ 
                pendingQuotes: res, 
                pendingQuotesLoading: false 
            });
        }).catch(e => {
            alert("Failed to load pending quotes: " + e.message);
            this.setState({ 
                pendingQuotesLoading: false 
            });
        });;
    }

    render() {
        return (
            <div className="home">

                <HeroCard leadCount={this.state.leadCount} quotesCount={this.state.quoteCount} pendingCount={this.state.pendingQuoteCount}></HeroCard>

                <DashboardCard name="Quick Quote" icon="box-arrow-right">
                    <QuoteForm key="content"></QuoteForm>
                </DashboardCard>

                <DashboardCard name="Pending Quotes" icon="clock-history" minWidth="400px" padding="0px">
                    <Button variant="contained" key="headerButton" onClick={this.loadPendingQuotes}>
                        <i className={"p-0 bi bi-recycle"}></i>
                    </Button>
                    <QuoteList key="content" quotes={this.state.pendingQuotes} quotesLoading={this.state.pendingQuotesLoading} emptyMessage={"You have no pending quotes"}></QuoteList>
                </DashboardCard>

                <DashboardCard name="New Leads" icon="file-person">
                </DashboardCard>

                <DashboardCard name="Popular Destinations & Packages" icon="pin-map" minWidth="400px" growWidth="true">
                </DashboardCard>

                <DashboardCard name="Team Chat" icon="chat-left-dots">
                </DashboardCard>

                <DashboardCard name="Revenue" icon="graph-up">
                </DashboardCard>

                <DashboardCard name="Potential Revenue" icon="pie-chart">
                </DashboardCard>

                <DashboardCard name="Close Ratios" icon="hand-thumbs-up">
                </DashboardCard>
            </div>
        );
    }

}

