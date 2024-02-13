import {
  isValid,
  readjustForShortestPath,
  readjustForVisited,
} from "@/Algorithms/helper/misc"

import { node } from "@/types/misc"
import { GRID_COL_MAX_SIZE, GRID_ROW_MAX_SIZE } from "@/lib/consts"

const dRow = [0, 1, 0, -1]
const dCol = [-1, 0, 1, 0]

function bfs(
  grid: node[][],
  vis: boolean[][],
  res: number[],
  row: number,
  col: number
) {
  // Stores indices of the matrix cells
  var q = []

  // Mark the starting cell as visited
  // and push it into the queue
  q.push([row, col])
  vis[row][col] = true

  // Iterate while the queue
  // is not empty
  while (q.length != 0) {
    var cell = q[0]
    var x = cell[0]
    var y = cell[1]

    q.shift()
    if (grid[row][col].isFinish) {
      break
    }
    res.push([x, y])

    // Go to the adjacent cells
    for (var i = 0; i < 4; i++) {
      var adjx = x + dRow[i]
      var adjy = y + dCol[i]

      if (isValid(vis, adjx, adjy)) {
        q.push([adjx, adjy])
        vis[adjx][adjy] = true
      }
    }
  }
  readjustForVisited(grid, res)
  readjustForShortestPath(grid, res)
}

export default function BFSAlgo(
  arr: node[][],
  numRows: number,
  numCols: number,
  start_row: number,
  start_col: number
) {
  let res: number[] = []
  let vis: boolean[][] = Array.from({ length: numRows }, () =>
    Array(numCols).fill(false)
  )

  const arr1 = [...arr]
  bfs(arr1, vis, res, start_row, start_col)

  return {
    res: res,
    grid: arr1,
    vis: vis,
  }
}
