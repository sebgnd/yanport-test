import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grid, Instruction, Vacum } from '../types/types';
import { VacumService } from '../services/vacum.service';

@Component({
  selector: 'app-vacum-position-calculator',
  templateUrl: './vacum-position-calculator.component.html',
  styleUrls: ['./vacum-position-calculator.component.scss']
})
export class VacumPositionCalculatorComponent implements OnInit {
  grid: Grid;
  vacum: Vacum;
  computedVacum: Vacum | null;
  instructions: Instruction[];

  constructor(private vacumService: VacumService) { }

  ngOnInit(): void {
    this.grid = { width: 10, height: 10 };
    this.vacum = { x: 0, y: 0, orientation: 'N' };
    this.instructions = ['D', 'A', 'D', 'A', 'D', 'A', 'D', 'A', 'A'];
  }

  onGridSizeChange(event: any) {
    const { name, value } = event.currentTarget;

    this.grid = {
      ...this.grid,
      [name]: parseInt(value)
    }
  }

  onVacumInfoChange(event: any) {
    const { name, value } = event.currentTarget;

    this.vacum = {
      ...this.vacum,
      [name]: parseInt(value)
    }
  }

  onGoClick() {
    const newVacum = this.vacumService.move(this.vacum, this.grid, this.instructions);

    console.log(newVacum);
  }
}
