import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import {
  GRID_COL_MAX_SIZE,
  GRID_ROW_MAX_SIZE,
  NODE_FINISH_COL,
  NODE_FINISH_ROW,
  NODE_START_COL,
  NODE_START_ROW,
} from "./consts"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createNode(col: number, row: number) {
  return {
    col,
    row,
    isStart: row === NODE_START_ROW && col === NODE_START_COL,
    isFinish: row === NODE_FINISH_ROW && col === NODE_FINISH_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  }
}

export function getInitialGrid() {
  const grid = []
  for (let row = 0; row < GRID_ROW_MAX_SIZE; row++) {
    const currentRow = []
    for (let col = 0; col < GRID_COL_MAX_SIZE; col++) {
      const node = createNode(col, row)
      if (col === 10 && row === 10) {
        node.isWall = true
      }
      if (col === 10 && row === 11) {
        node.isVisited = true
      }
      currentRow.push(node)
    }
    grid.push(currentRow)
  }
  return grid
}
