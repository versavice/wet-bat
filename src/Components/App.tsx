import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { QuoteDash } from './Quotes/QuoteDash';
import { Home } from './Home/Home';
import {
  createTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { QuoteDetail } from './Quotes/QuoteDetail/QuoteDetail';

export class App extends React.Component {

  theme = createTheme({
    palette: {
      primary: {
        main: "#5BBFBA",
        contrastText: "white",
      },
      secondary: {
        main: "#5F6CAF",
      },
    },
  });

  render() {
    return (
      <ThemeProvider theme={this.theme}>

        <div className="dashboard">
          {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"></link> */}

          <Header></Header>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Router>
              <Sidebar></Sidebar>

              <div className="content">
                <Switch>

                  <Route path="/Quotes">
                    <QuoteDash></QuoteDash>
                    <Route path='/Quotes/:id' render={({ match }) => (
                      <QuoteDetail id={match.params.id} />
                    )} />
                  </Route>
                  

                  <Route path="/Tours">
                  </Route>

                  <Route path="/Invoices">
                  </Route>

                  <Route path="/Analytics">
                  </Route>

                  <Route path="/Team">
                  </Route>

                  <Route path="/Admin">
                  </Route>

                  <Route path="/">
                    <Home></Home>
                  </Route>

                </Switch>
              </div>
            </Router>

          </div>
        </div>
      </ThemeProvider>
    );
  }
}
