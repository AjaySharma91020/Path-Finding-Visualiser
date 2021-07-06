export function bfs(start,destination,grid,rows,columns){
    if(start.isVisited) {
        return {
            path : [],
            visitedNodes : [],
            distance : []
        }
    }
    let que = []
    let visitedNodes = []
    let prevNodes = []

    let directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];

    for (let row = 0; row < rows; row++) {
        let prevRow = [];
        for (let col = 0; col < columns; col++) {
          prevRow.push(null);
        }
        prevNodes.push(prevRow);
    }

    let distance = 0;
    let foundDest = false;
    que.push(start);
    grid[start.row][start.col].isVisited = true;
    while (que.length && !foundDest) {
      let sz = que.length;
      for (let i = 0; i < sz; i++) {
        let curr = que.shift();
        visitedNodes.push(curr);
        for (let j = 0; j < directions.length; j++) {
          let newX = curr.row + directions[j][0];
          let newY = curr.col + directions[j][1];
          if (
            newX >= 0 &&
            newY >= 0 &&
            newX < rows &&
            newY < columns &&
            !grid[newX][newY].isVisited 
          ) {
            if(grid[newX][newY] === destination){
                 prevNodes[newX][newY] = curr;
                 foundDest = true;
                 break;
            }
            que.push(grid[newX][newY]);
            grid[newX][newY].isVisited = true;
            prevNodes[newX][newY] = curr;
          }
        }
      }
      distance++;
      if(foundDest) break;
    }
    let path = getPath(grid,prevNodes,destination)
    return {
        path,visitedNodes,distance
    }
  };

function getPath(grid,prevNodes,destination){
      let path = []; 
      let currNode = destination
      while(currNode !== null){
           path.push(currNode);
           currNode = prevNodes[currNode.row][currNode.col]
      }
      path.reverse()
      return path
  };