import React from "react";
import './SideBarItem.css';
var NavLink = require ("react-router-dom").NavLink;

export class SideBarItem extends React.Component <any, any> {

  render() {
    return (
        <NavLink activeClassName="active" className="menu-item" to={"/" + this.props.name}>
            <i className={"bi bi-" + this.props.icon}></i>
            <span>{this.props.name}</span>
        </NavLink>
    );
  }

}

