import React from "react";
import logo from "../../Assets/wet-bat-logo.png"
import './Header.css'
import IconButton from '@material-ui/core/IconButton'
var DarkReader = require("darkreader");

export class Header extends React.Component  {

  constructor(props) {
    super(props);

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      DarkReader.enable();  
    }
  }
  
  toggleDarkMode() {
    if (DarkReader.isEnabled()) {
      DarkReader.disable();  
      localStorage.setItem("theme", "light");
    } else {
      DarkReader.enable();  
      localStorage.setItem("theme", "dark");
    }
  }

  render() {
    return (
      <div className="header">
          <img className="logo" src={logo} alt="logo"></img>

          <IconButton onClick={this.toggleDarkMode}>
            <i className={"p-0 bi bi-mask"}></i>
          </IconButton>
      </div>
    );
  }
}
