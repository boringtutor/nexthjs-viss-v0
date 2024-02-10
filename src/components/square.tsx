import { type node } from "@/types/misc"

//NOTE:version 0.1

// interface SquareProps {
//   sq: square
// }

// const SquareComponent: React.FC<SquareProps> = ({ sq }) => {
//   // Render the Square component here
//   const bgunvisited = "bg-sky-300"
//   const bgvisited = "bg-slate-300"
//   const bgblocked = "bg-red-300"
//   const bgbackground =
//     sq.type === "unvisited"
//       ? bgunvisited
//       : sq.type === "visited"
//         ? bgvisited
//         : bgblocked
//   return (
//     <div
//       className={`w-${sq.width} h-${sq.height} border-2 border-sky-500 ${bgbackground} `}
//       id={sq.id}
//     ></div>
//   )
// }

//NOTE: version 0.2
interface NodeSquareProps {
  sq: node
}

export const NodeSquareComponent: React.FC<NodeSquareProps> = ({ sq }) => {
  return (
    <div
      className={`h-10 w-10 border-2 border-sky-500 ${sq.isStart ? "bg-green-300" : sq.isFinish ? "bg-yellow-300" : sq.isWall ? "bg-red-300" : sq.isVisited ? "bg-slate-300" : "bg-sky-300"}`}
      id={`${sq.row}-${sq.col}`}
    ></div>
  )
}
