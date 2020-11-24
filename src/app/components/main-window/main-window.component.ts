import { Component, OnInit } from '@angular/core';
import { Grid, Instruction, Vacuum, Position, VacuumWithPositions } from 'src/app/types/types';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {
  grid: Grid;
  vacuum: Vacuum;
  vacuumPositions: Set<string> | null;
  instructions: Instruction[];
  newVacuum: Vacuum | null;

  constructor() { }

  handleNewVacuumComputed({ vacuum, positions }: VacuumWithPositions) {
    console.log(vacuum);
    console.log(positions);
    this.newVacuum = vacuum;
    this.vacuumPositions = positions;
  }

  handleGridChange(grid: Grid) {
    this.grid = {
      ...grid
    };
  }

  // Only handle direction for now
  // The position is handle by the grid
  handleVacuumChange(vacuum: Vacuum) {
    this.updateVacuum('direction', vacuum.direction);
  }

  handleGridClick(position: Position) {
    this.updateVacuum('x', position.x);
    this.updateVacuum('y', position.y);
  }

  handleInstructionsChange(instructions: Instruction[]) {
    this.instructions = instructions;
  }

  updateVacuum(key: string, value: any) {
    if (this.newVacuum) {
      this.newVacuum = null;
      this.vacuumPositions = null;
    }
    this.vacuum = {
      ...this.vacuum,
      [key]: value
    }
  }

  ngOnInit(): void {
    this.grid = { width: 10, height: 10 };
    this.vacuum = { x: 0, y: 0, direction: 'N' };
    this.instructions = [];
    this.newVacuum = null;
    this.vacuumPositions = null;
  }
}
