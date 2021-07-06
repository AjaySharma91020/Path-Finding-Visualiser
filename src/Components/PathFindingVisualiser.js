import React, { Component } from "react";
import Square from "./Square/Square";
import { bfs } from "../Algorithms";
import "../Components/Square/Square.css";
import InfoBar from "./Infobar/InfoBar";
let rows = 28;
let columns = 55;
class PathFindingVisualiser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      initialX: null,
      initialY: null,
      finalX: null,
      finalY: null,
      status: "",
    };
    this.initialiseGrid = this.initialiseGrid.bind(this);
    this.handleClickSquare = this.handleClickSquare.bind(this);
    this.visualise = this.visualise.bind(this);
    this.animateBFS = this.animateBFS.bind(this);
    this.animatePath = this.animatePath.bind(this);
  }
  componentDidMount() {
    let screenSize = window.screen.availWidth;
    if (screenSize < 1400 && screenSize >= 1000) {
      rows = 20;
      columns = 45;
    } else if (screenSize < 1000 && screenSize >= 780) {
      rows = 20;
      columns = 35;
    } else if (screenSize < 780 && screenSize > 500) {
      rows = 20;
      columns = 25;
    } else if (screenSize < 500) {
      rows = 13;
      columns = 14;
    }
    this.initialiseGrid();
  }
  initialiseGrid() {
    let newGrid = [];
    for (let row = 0; row < rows; row++) {
      let currRow = [];
      for (let col = 0; col < columns; col++) {
        currRow.push({
          row,
          col,
          isInitial: false,
          isFinal: false,
          isVisited: false,
        });
      }
      newGrid.push(currRow);
    }
    this.setState({
      grid: newGrid,
      initialX: null,
      initialY: null,
      finalX: null,
      finalY: null,
      status: "Select the Source Node",
    });
  }

  handleClickSquare(row, col) {
    let { grid } = this.state;
    let { initialX, initialY, finalX, finalY, status } = this.state;
    let newGrid = [...grid];
    if (
      initialX != null &&
      initialY !== null &&
      finalX !== null &&
      finalY !== null
    )
      return;
    else if (
      initialX === null &&
      initialY === null &&
      finalX === null &&
      finalY === null
    ) {
      initialX = row;
      initialY = col;
      newGrid[row][col].isInitial = true;
      status = "Select the Destination Node";
    } else if (
      initialX !== null &&
      initialY !== null &&
      finalX === null &&
      finalY === null
    ) {
      if (initialX === row && initialY === col) {
        alert("intial and final points cannot be same");
        return;
      } else {
        finalX = row;
        finalY = col;
        newGrid[row][col].isFinal = true;
        status = "Ready to Visualise";
      }
    }
    this.setState({
      initialX,
      initialY,
      finalX,
      finalY,
      grid: newGrid,
      status,
    });
  }
  visualise() {
    let { initialX, initialY, finalX, finalY, grid } = this.state;
    let { animateBFS, animatePath } = this;
    if (initialX === null && finalX === null) {
      alert("Please specify initial and final points");
      return;
    } else if (initialX !== null && finalX === null) {
      alert("Please specify the final point");
      return;
    }
    let { path, visitedNodes, distance } = bfs(
      grid[initialX][initialY],
      grid[finalX][finalY],
      grid,
      rows,
      columns
    );
    animateBFS(visitedNodes);
    setTimeout(() => {
      animatePath(path);
      this.setState({
        distance,
        status: `Shortest distance found is ${distance}`,
      });
    }, visitedNodes.length * 25);
  }

  animateBFS(visitedNodes) {
    for (let i = 1; i < visitedNodes.length; i++) {
      setTimeout(() => {
        let currNode = visitedNodes[i];
        document
          .getElementById(`square-${currNode.row}-${currNode.col}`)
          .classList.add("visited-square");
      }, i * 25);
    }
  }

  animatePath(path) {
    for (let i = 1; i < path.length - 1; i++) {
      setTimeout(() => {
        let currNode = path[i];
        document
          .getElementById(`square-${currNode.row}-${currNode.col}`)
          .classList.add("path-square");
      }, i * 25);
    }
  }
  reset() {
    window.location.reload();
  }

  render() {
    let { grid, status } = this.state;
    const { handleClickSquare, visualise, reset } = this;
    return (
      <div className="container mt-2">
        <div className="container">
          <h1>Path Finding Visualiser</h1>
          <div className="row">
            <div className="col-md-6 text-center mt-3">
              <InfoBar />
            </div>
            <div className="col-md-4 text-center mt-3">
              <span className="bg-dark text-white font-weight-light font-italic p-2 m-1">
                {status}
              </span>
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-warning mt-3 mb-1"
                onClick={() => visualise()}
              >
                Visualise
              </button>
            </div>
            <div className="col-md-1">
              <button className="btn btn-primary mt-3 mb-1" onClick={() => reset()}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-2">
          {grid.map((row, currRow) => {
            return (
              <div className="row" key={currRow}>
                {row.map((box, currCol) => {
                  return (
                    <Square
                      key={`square-${currRow}-${currCol}`}
                      id={`square-${currRow}-${currCol}`}
                      handleClickSquare={handleClickSquare}
                      {...grid[currRow][currCol]}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PathFindingVisualiser;
