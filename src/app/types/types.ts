export type Direction = 'N' | 'E' | 'S' | 'W';
export type Instruction = 'G' | 'D' | 'A';
export type Status = 'start' | 'end' | 'path' | 'none';

export interface DirectionDeltaCoordinates {
    [key: string]: number[]
}

export interface Grid {
    width: number;
    height: number;
}

export interface Vacuum {
    x: number;
    y: number;
    direction: Direction;
}

export interface VacuumWithPositions {
    vacuum: Vacuum;
    positions: Set<string>;
}

export interface Position {
    x: number;
    y: number;
}