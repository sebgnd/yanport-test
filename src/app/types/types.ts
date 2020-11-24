export type Orientation = 'N' | 'E' | 'S' | 'W';
export type Instruction = 'G' | 'D' | 'A';
export type Status = 'start' | 'end' | 'path' | 'none';

export interface OrientationDeltaCoordinates {
    [key: string]: number[]
}

export interface Grid {
    width: number;
    height: number;
}

export interface Vacum {
    x: number;
    y: number;
    orientation: Orientation;
}

export interface VacumWithPositions {
    vacum: Vacum;
    positions: Set<string>;
}

export interface Position {
    x: number;
    y: number;
}