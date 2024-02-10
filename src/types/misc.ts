export type square = {
    x: number;
    y: number;
    z?: number;
    width: number;
    height: number;
    id: string;
    type: squareType;
}

export type squareType = 'unvisited' | 'visited' | 'blocked';