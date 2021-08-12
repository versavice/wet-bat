import './Sidebar.css';
import React from "react";
import { SideBarItem } from './SideBarItem/SideBarItem';

export class Sidebar extends React.Component  {
  
  render() {
    return (
      <div className="sidebar">

          <SideBarItem name="Home" icon="house-fill"></SideBarItem>
          <SideBarItem name="Quotes" icon="currency-dollar"></SideBarItem>
          <SideBarItem name="Tours" icon="pin-map-fill"></SideBarItem>
          <div className="divider"></div>
          <SideBarItem name="Invoices" icon="file-earmark-medical-fill"></SideBarItem>
          <SideBarItem name="Analytics" icon="graph-up"></SideBarItem>
          <SideBarItem name="Team" icon="people-fill"></SideBarItem>
          <SideBarItem name="Admin" icon="gear-fill"></SideBarItem>
          <div className="divider"></div>
          
          <div className="copyright">All rights reserved by wetbat 2021©</div>
      </div>
    );
  }

}