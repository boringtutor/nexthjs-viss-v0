"use client"
import { square } from '@/types/misc';

interface SquareProps {
    sq: square;
}

const SquareComponent: React.FC<SquareProps> = ({ sq }) => {
    // Render the Square component here
    const bgunvisited = 'bg-sky-300';
    const bgvisited = 'bg-slate-300';
    const bgblocked = 'bg-red-300';
    const bgbackground = sq.type === 'unvisited' ? bgunvisited : sq.type === 'visited' ? bgvisited : bgblocked;
    return <div  className={`w-${sq.width} h-${sq.height} border-2 border-sky-500 ${bgbackground} `} id={sq.id} >
        {/* <div>{sq.height}</div>
        <div>{sq.width}</div>
        <div>{sq.id}</div>
        <div>{sq.type}</div>
        <div>{sq.x}</div>
        <div>{sq.y}</div>
        <div>{sq.z}</div> */}
    </div>;
};

export default SquareComponent;
