import {
  isValid,
  readjustForShortestPath,
  readjustForVisited,
} from "@/Algorithms/helper/misc"

import { node } from "@/types/misc"
import { GRID_COL_MAX_SIZE, GRID_ROW_MAX_SIZE } from "@/lib/consts"

const dRow = [0, 1, 0, -1]
const dCol = [-1, 0, 1, 0]

function dfs(
  grid: node[][],
  vis: boolean[][],
  res: number[],
  row: number,
  col: number
) {
  let stack = []
  stack.push([row, col])
  while (stack.length !== 0) {
    let cur = stack[stack.length - 1]
    stack.pop()
    let row = cur[0]
    let col = cur[1]
    if (!isValid(vis, row, col)) continue
    vis[row][col] = true
    if (grid[row][col].isFinish) {
      break
    }
    res.push([row, col])
    for (let i = 0; i < 4; i++) {
      let adjx = row + dRow[i]
      let adjy = col + dCol[i]
      stack.push([adjx, adjy])
    }
  }

  readjustForVisited(grid, res)
  readjustForShortestPath(grid, res)
  //testing....
  // res.push([1, 2])
}

export default function DFSAlgo(
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

  dfs(arr1, vis, res, start_row, start_col)

  return {
    res: res,
    grid: arr1,
    vis: vis,
  }
}
