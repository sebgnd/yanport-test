import { Component, OnInit } from '@angular/core';
import { Grid, Instruction, Vacum, Position, VacumWithPositions } from 'src/app/types/types';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {
  grid: Grid;
  vacum: Vacum;
  vacumPositions: Set<string> | null;
  instructions: Instruction[];
  newVacum: Vacum | null;

  constructor() { }

  handleNewVacumComputed({ vacum, positions }: VacumWithPositions) {
    console.log(vacum);
    console.log(positions);
    this.newVacum = vacum;
    this.vacumPositions = positions;
  }

  handleGridChange(grid: Grid) {
    this.grid = {
      ...grid
    };
  }

  // Only handle orientation for now
  // The position is handle by the grid
  handleVacumChange(vacum: Vacum) {
    this.updateVacum('orientation', vacum.orientation);
  }

  handleGridClick(position: Position) {
    this.updateVacum('x', position.x);
    this.updateVacum('y', position.y);
  }

  handleInstructionsChange(instructions: Instruction[]) {
    this.instructions = instructions;
  }

  updateVacum(key: string, value: any) {
    if (this.newVacum) {
      this.newVacum = null;
      this.vacumPositions = null;
    }
    this.vacum = {
      ...this.vacum,
      [key]: value
    }
  }

  ngOnInit(): void {
    this.grid = { width: 10, height: 10 };
    this.vacum = { x: 0, y: 0, orientation: 'N' };
    this.instructions = [];
    this.newVacum = null;
    this.vacumPositions = null;
  }
}
