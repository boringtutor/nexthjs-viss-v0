"use state"
import React from 'react';
import SquareComponent from './square';

// function initializeGrid() {
//     const grid = [];
//     for (let row = 0; row < 10; row++) {
//         const currentRow = [];
//         for (let col = 0; col < 10; col++) {
//             currentRow.push(createNode(col, row));
//         }
//         grid.push(currentRow);
//     }
//     return grid;

// }


const Visualizer: React.FC = () => {
    const fieldSize = 10;
    // const arr = new Array(fieldSize);
    
    // const [state,setState] = React.useState(0);
    return (
        <div>
            {Array.from({ length: fieldSize }, (_, row) => (
                <div key={row} style={{ display: 'flex' }}>
                    {Array.from({ length: fieldSize }, (_, col) => (
                        <SquareComponent key={col}  sq = {{
                            x: col,
                            y: row,
                            width: 10,
                            height: 10,
                            id: `${row}-${col}`,
                            type: 'unvisited',
                        }}/>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Visualizer;
