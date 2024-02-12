import { type node } from "@/types/misc"

//NOTE: version 0.2
interface NodeSquareProps {
  sq: node
}

export const NodeSquareComponent: React.FC<NodeSquareProps> = ({ sq }) => {
  return (
    <div
      className={`h-10 w-10 border-2 border-sky-500 ${sq.isStart ? "bg-green-300" : sq.isFinish ? "bg-yellow-300" : sq.isWall ? "bg-red-300" : sq.isShortestPathNode ? "bg-yellow-800" : sq.isVisited ? "bg-slate-400" : "bg-sky-300"}`}
      id={`${sq.row}-${sq.col}`}
    ></div>
  )
}
