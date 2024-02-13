"use client"

import React from "react"
import BFSAlgo from "@/Algorithms/BFS/bfs"
import DFSAlgo from "@/Algorithms/DFS/dfs"

import { type node } from "@/types/misc"
import {
  GRID_COL_MAX_SIZE,
  GRID_ROW_MAX_SIZE,
  NODE_START_COL,
  NODE_START_ROW,
} from "@/lib/consts"
import { getInitialGrid } from "@/lib/utils"

import { Button } from "./button"
import { NodeSquareComponent } from "./square"

const Visualizer: React.FC = () => {
  const [state, setState] = React.useState<node[][]>(getInitialGrid())

  function update(grid: node[][]) {
    setState(grid)
    console.log(state)
  }
  return (
    <div>
      {state.map((row, i) => (
        <div key={i} style={{ display: "flex" }}>
          {row.map((col, j) => (
            <NodeSquareComponent
              key={j}
              sq={{
                col: j,
                row: i,
                isStart: col.isStart,
                isFinish: col.isFinish,
                distance: col.distance,
                isVisited: col.isVisited,
                isShortestPathNode: col.isShortestPathNode,
                isWall: col.isWall,
                previousNode: col.previousNode,
              }}
            />
          ))}
        </div>
      ))}

      <Button
        variant="secondary"
        size="default"
        onClick={() => {
          console.log("clicked")
          // TODO: fix this destructing of the result
          const { res, grid, vis } = BFSAlgo(
            state,
            GRID_ROW_MAX_SIZE,
            GRID_COL_MAX_SIZE,
            NODE_START_ROW,
            NODE_START_COL
          )
          console.log(vis)
          update(grid)
        }}
      >
        test
      </Button>
    </div>
  )
}

export default Visualizer
