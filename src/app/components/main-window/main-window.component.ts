import { Component, OnInit } from '@angular/core';
import { Grid, Instruction, Vacum } from 'src/app/types/types';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {
  grid: Grid;
  vacum: Vacum;
  instructions: Instruction[];
  newVacum: Vacum | null;

  constructor() { }

  handleNewVacumComputed(vacum: Vacum) {
    this.newVacum = vacum;
  }

  handleGridChange(grid: Grid) {
    this.grid = grid;
  }

  handleVacumChange(vacum: Vacum) {
    this.vacum = vacum;
  }

  ngOnInit(): void {
    this.grid = { width: 10, height: 10 };
    this.vacum = { x: 0, y: 0, orientation: 'N' };
    this.instructions = ['D', 'A', 'D', 'A', 'D', 'A', 'D', 'A', 'A'];
    this.newVacum = null;
  }
}
