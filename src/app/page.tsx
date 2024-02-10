import SquareComponent from "@/components/square";
import Visualizer from "@/components/visualizer";
import { squareType } from "@/types/misc";

export default function Home() {
  let square = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    id: "3",
    type: "unvisited" as squareType,
  };
  
  return (
    <main>
      <h1>statingh</h1>
      <div>
        <Visualizer />
      </div>
    </main>
  );
}
      

