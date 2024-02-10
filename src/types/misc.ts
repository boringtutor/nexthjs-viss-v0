export type square = {
  x: number
  y: number
  z?: number
  width: number
  height: number
  id: string
  type: squareType
}

export type squareType = "unvisited" | "visited" | "blocked"

export type node = {
  col: number
  row: number
  isStart: boolean
  isFinish: boolean
  distance: number
  isVisited: boolean
  isWall: boolean
  previousNode: node | null
}
