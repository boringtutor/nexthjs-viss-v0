"use client"

import React from "react"

import { getInitialGrid } from "@/lib/utils"

import { NodeSquareComponent } from "./square"

const Visualizer: React.FC = () => {
  console.log(getInitialGrid())
  const [state, setState] = React.useState(getInitialGrid())
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
                isWall: col.isWall,
                previousNode: col.previousNode,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Visualizer
