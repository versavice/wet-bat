import React from "react";
import './Quotes.css';
import { QuoteForm } from "./QuoteForm/QuoteForm";
import { QuoteList } from "./QuoteList/QuoteList";
import { DashboardCard } from "../DashboardCard/DashboardCard";
import { QuoteService } from "../../Services/QuoteService";
import Button from '@material-ui/core/Button'

export class Quotes extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            quotes: [],
            quotesLoading: false,
        };
        this.loadQuotes = this.loadQuotes.bind(this);

    }

    componentDidMount() {
        this.loadQuotes();
    }

    loadQuotes() {
        this.setState({ quotesLoading: true });
        QuoteService.getQuotes().then((res) => {
            this.setState({ quotes: res, quotesLoading: false });
        });
    }

    render() {
        return (
            <div className="quotes">

                <DashboardCard name="Quotes" padding="0" growWidth="true" growHeight="true">
                    <Button variant="contained" key="headerButton" onClick={this.loadQuotes}>
                        <i className={"p-0 bi bi-recycle"}></i>
                    </Button>
                    <QuoteList key="content" quotes={this.state.quotes} quotesLoading={this.state.quotesLoading} showMoreDetail="true"></QuoteList>
                </DashboardCard>

                <DashboardCard name="New Quote">
                    <QuoteForm key="content"></QuoteForm>
                </DashboardCard>

            </div>
        );
    }

}

