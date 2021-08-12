import React from "react";
import './HeroCard.css';
import '../../../index.css';
import mainCardImg from "../../../Assets/mainCardImg.png";

export class HeroCard extends React.Component <any, any> {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
          };
    }
    
    render() {
        return (
            <div className="dashboard-card hero-card">
                <div className="flex-col justify-center">
                    <div className="card-header">
                        <span>Welcome to your dashboard</span>
                    </div>
                    <div className="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>

                <div className="flex-col" style={{padding: 15}}>
                    <div className="hero-card-img">
                        <img className="hero-card-img" src={mainCardImg} alt=""></img>
                    </div>
                    <div className="hero-count-container">
                        <div className={"hero-count " + (this.props.leadCount > 0 ? "visible" : "opaque")}>
                            <span className="hero-count-num">{this.props.leadCount}</span> 
                            <span className="hero-count-text">New Leads</span>
                        </div>
                        <div className={"hero-count " + (this.props.quotesCount > 0 ? "visible" : "opaque")}>
                            <span className="hero-count-num">{this.props.quotesCount}</span> 
                            <span className="hero-count-text">Quotes Created</span>
                        </div>
                        <div className={"hero-count " + (this.props.pendingCount > 0 ? "visible" : "opaque")}>
                            <span className="hero-count-num">{this.props.pendingCount}</span> 
                            <span className="hero-count-text">Pending Orders</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
  
