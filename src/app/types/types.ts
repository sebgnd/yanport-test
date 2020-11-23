export type Orientation = 'N' | 'E' | 'S' | 'W';
export type Instruction = 'G' | 'D' | 'A';

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