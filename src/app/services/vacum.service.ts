import { Injectable } from '@angular/core';
import { Vacum, Instruction, Grid, Orientation } from '../types/types';

@Injectable({
    providedIn: 'root'
})
export class VacumService {

    constructor() { }

    move(vacum: Vacum, grid: Grid, instructions: Instruction[]): Vacum {
        let updatedVacum: Vacum = vacum;

        for (let instruction of instructions) {
            const previousVacum = updatedVacum;
    
            updatedVacum = this.getVacumAfterInstruction(updatedVacum, instruction);

            if (
                updatedVacum.x >= grid.width || updatedVacum.x < 0 ||
                updatedVacum.y >= grid.height || updatedVacum.y < 0
            ) {
                updatedVacum = previousVacum;
            }
        }
    
        return updatedVacum;
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
        } else {
            return {
                ...vacum,
                x: vacum.x + deltaCoordinates[vacum.orientation][0],
                y: vacum.y + deltaCoordinates[vacum.orientation][1],
            }
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