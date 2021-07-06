import React, { Component } from "react";
import "./Square.css";
import classNames from "classnames"
class Square extends Component {
  render() {
    const {id,row, col, handleClickSquare,isInitial,isFinal} = this.props;
    return (
      <div
        id = {id}
        className = {classNames("square border border-dark",{"initial-square" : isInitial,"final-square": isFinal})}
        onClick={() => handleClickSquare(row, col)}
      ></div>
    );
  }
}

export default Square;
