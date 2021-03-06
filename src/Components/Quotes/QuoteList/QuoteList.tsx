import React from "react";
import './QuoteList.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import format from "date-fns/format";
import { useHistory } from 'react-router-dom';

export function QuoteList(props) {

    const history = useHistory();
    const openQuote = (quoteId) => history.push("Quotes/" + quoteId);


    return (
        <div className="quote-list-form">
            {props.quotesLoading

                ?
                <div className="quote-loading">
                    <CircularProgress color="secondary" />
                </div>

                :
                <span>
                    {props.quotes.length === 0
                        ?
                        <div className="empty-table-message">{props.emptyMessage}</div>
                        :
                        <TableContainer className="quote-table">
                            <Table stickyHeader size="small" aria-label="quote table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Departure</TableCell>
                                        <TableCell>Destination</TableCell>
                                        {props.showMoreDetail &&
                                            <React.Fragment>
                                                <TableCell>Return</TableCell>
                                                <TableCell>Transportation</TableCell>
                                                <TableCell>Pending</TableCell>
                                            </React.Fragment>
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.quotes.map((row) => (
                                        <TableRow key={row.IdQuote} onClick={() => openQuote(row.IdQuote)}>
                                            <TableCell>{row.IdQuote}</TableCell>
                                            <TableCell>{row.ContactName}</TableCell>
                                            <TableCell>
                                                {row.DepartureCity + (props.showMoreDetail
                                                    ? " (" + row.DepartureCode + ") on " + format(new Date(row.DateDeparture), "PP")
                                                    : ""
                                                )}
                                            </TableCell>

                                            <TableCell>
                                                {row.DestinationCity + (props.showMoreDetail
                                                    ? " (" + row.DestinationCode + ")"
                                                    : ""
                                                )}
                                            </TableCell>
                                            {props.showMoreDetail &&
                                                <React.Fragment>
                                                    <TableCell>{format(new Date(row.DateReturn), "PP")}</TableCell>
                                                    <TableCell>{row.TransportationName}</TableCell>
                                                    <TableCell>
                                                        {row.IsPending === 1
                                                            ? <i className={"p-0 bi bi-check2 success"}></i>
                                                            : <i className={"p-0 bi bi-x fail"}></i>
                                                        }
                                                    </TableCell>
                                                </React.Fragment>
                                            }
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </span>
            }
        </div>
    );

}

