import { Injectable } from '@angular/core';
import { Vacuum, Instruction, Grid, Direction, VacuumWithPositions } from '../types/types';

@Injectable({
    providedIn: 'root'
})
export class VacuumService {

    constructor() { }

    move(vacuum: Vacuum, grid: Grid, instructions: Instruction[]): VacuumWithPositions {
        const positions: Set<string> = new Set();
        let updatedVacuum: Vacuum = vacuum;

        for (let instruction of instructions) {
            const previousVacuum = updatedVacuum;
    
            updatedVacuum = this.getVacuumAfterInstruction(updatedVacuum, instruction);
            positions.add(
                updatedVacuum.x.toString() + updatedVacuum.y.toString()
            );

            if (
                updatedVacuum.x >= grid.width || updatedVacuum.x < 0 ||
                updatedVacuum.y >= grid.height || updatedVacuum.y < 0
            ) {
                updatedVacuum = previousVacuum;
            }
        }
    
        return {
            vacuum: updatedVacuum,
            positions: positions
        };
    }

    generateInstructions(str: string): Instruction[] {
        const upperCased: string = str.toUpperCase();
        const res: Instruction[] = [];
        
        for (let i = 0; i < upperCased.length; i++) {
            const c = upperCased.charAt(i);

            if (c === 'A' || c === 'G' || c === 'D') {
                res.push(c);
            }
        }

        return res;
    }

    getVacuumAfterInstruction(vacuum: Vacuum, instruction: Instruction): Vacuum {
        const deltaCoordinates: any = {
            N: [0, 1],
            S: [0, -1],
            E: [1, 0],
            W: [-1, 0],
        }

        if (instruction === 'G' || instruction === 'D') {
            return {
                ...vacuum,
                direction: this.getNextDirection(vacuum.direction, instruction)
            }
        } else if (instruction === 'A') {
            return {
                ...vacuum,
                x: vacuum.x + deltaCoordinates[vacuum.direction][0],
                y: vacuum.y + deltaCoordinates[vacuum.direction][1],
            }
        } else {
            return vacuum;
        }
    }
    
    getNextDirection (direction: Direction, instruction: Instruction): Direction {
        const order: Direction[] = ['N', 'E', 'S', 'W'];
        const directionDelta: number = instruction === 'D' ? 1 : -1;
        const index: number = order.findIndex((o: Direction) => o === direction);
    
        const newIndex: number = index + directionDelta;
    
        if (newIndex >= order.length) return order[0];
        else if (newIndex < 0) return order[order.length - 1];
        else return order[newIndex];
    }
}