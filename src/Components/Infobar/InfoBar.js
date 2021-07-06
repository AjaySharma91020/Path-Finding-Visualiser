import React, { Component } from "react";
import "./InfoBar.css";
export class InfoBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="info-bar">
          <div className="square border border-dark initial-square"></div>
          <span className="info-text">Start</span>
        </div>

        <div className="info-bar">
          <div className="square border border-dark final-square"></div>
          <span className="info-text">Destination</span>
        </div>

        <div className="info-bar">
          <div className="square border border-dark visited-square"></div>
          <span className="info-text">Visited</span>
        </div>

        <div className="info-bar">
          <div className="square border border-dark path-square"></div>
          <span className="info-text">Path</span>
        </div>
        
      </div>
    );
  }
}

export default InfoBar;
