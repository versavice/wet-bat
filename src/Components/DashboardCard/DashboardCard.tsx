import React from "react";
import './DashboardCard.css';

export class DashboardCard extends React.Component <any, any> {
    
    getComponent(key) {
        if (this.props.children) {
            var children = (this.props.children) as any[];
            if (children.length === undefined) {
                // only one child element
                var child = (this.props.children) as any;
                return child.key === key ? child : null;
            }
            return children.filter(comp => {
                return comp.key === key;
            });
        }
     }

    render() {
        return (
            <div className={"dashboard-card " + (this.props.growWidth ? 'flex-grow' : '')} style={{minWidth: this.props.minWidth, maxHeight: this.props.growHeight ? "unset" : ""}}>
                <div className="card-header">
                    <div className="flex">
                        {this.props.icon &&
                            <i className={"bi bi-" + this.props.icon}></i>
                        }
                        <span>{this.props.name}</span>
                    </div>
                    {this.getComponent('headerButton')}
                </div>
                <div className="card-content" style={{padding: this.props.padding}}>
                    {this.getComponent('content')}
                </div>
            </div>
        );
    }

}
  
