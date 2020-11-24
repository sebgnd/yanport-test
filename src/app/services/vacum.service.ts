import { Injectable } from '@angular/core';
import { Vacum, Instruction, Grid, Orientation, VacumWithPositions } from '../types/types';

@Injectable({
    providedIn: 'root'
})
export class VacumService {

    constructor() { }

    move(vacum: Vacum, grid: Grid, instructions: Instruction[]): VacumWithPositions {
        const positions: Set<string> = new Set();
        let updatedVacum: Vacum = vacum;

        for (let instruction of instructions) {
            const previousVacum = updatedVacum;
    
            updatedVacum = this.getVacumAfterInstruction(updatedVacum, instruction);
            positions.add(
                updatedVacum.x.toString() + updatedVacum.y.toString()
            );

            if (
                updatedVacum.x >= grid.width || updatedVacum.x < 0 ||
                updatedVacum.y >= grid.height || updatedVacum.y < 0
            ) {
                updatedVacum = previousVacum;
            }
        }
    
        return {
            vacum: updatedVacum,
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

    getVacumAfterInstruction(vacum: Vacum, instruction: Instruction): Vacum {
        const deltaCoordinates: any = {
            N: [0, 1],
            S: [0, -1],
            E: [1, 0],
            W: [-1, 0],
        }

        if (instruction === 'G' || instruction === 'D') {
            return {
                ...vacum,
                orientation: this.getNextOrientation(vacum.orientation, instruction)
            }
        } else if (instruction === 'A') {
            return {
                ...vacum,
                x: vacum.x + deltaCoordinates[vacum.orientation][0],
                y: vacum.y + deltaCoordinates[vacum.orientation][1],
            }
        } else {
            return vacum;
        }
    }
    
    getNextOrientation (orientation: Orientation, instruction: Instruction): Orientation {
        const order: Orientation[] = ['N', 'E', 'S', 'W'];
        const direction: number = instruction === 'D' ? 1 : -1;
        const index: number = order.findIndex((o: Orientation) => o === orientation);
    
        const newIndex: number = index + direction;
    
        if (newIndex >= order.length) return order[0];
        else if (newIndex < 0) return order[order.length - 1];
        else return order[newIndex];
    }
}