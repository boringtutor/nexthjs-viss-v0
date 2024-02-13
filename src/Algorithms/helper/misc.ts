import { type node } from "@/types/misc"
import { GRID_COL_MAX_SIZE, GRID_ROW_MAX_SIZE } from "@/lib/consts"

export function readjustForVisited(grid: node[][], res: number[]) {
  for (let i = 0; i < res.length; i++) {
    let row = res[i][0]
    let col = res[i][1]
    grid[row][col].isVisited = true
  }
}
export function readjustForShortestPath(grid: node[][], res: number[]) {
  for (let i = 0; i < res.length; i++) {
    let row = res[i][0]
    let col = res[i][1]
    grid[row][col].isShortestPathNode = true
  }
}

export function isValid(vis: boolean[][], row: number, col: number) {
  // If cell is out of bounds
  if (
    row < 0 ||
    col < 0 ||
    row >= GRID_ROW_MAX_SIZE ||
    col >= GRID_COL_MAX_SIZE
  )
    return false

  if (vis[row][col]) return false

  // If the cell is already visited
  if (vis[row][col]) return false

  // Otherwise, it can be visited
  return true
}
