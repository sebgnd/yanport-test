import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Grid, Instruction, Vacum } from '../../types/types';
import { VacumService } from '../../services/vacum.service';

@Component({
  selector: 'app-vacum-position-calculator',
  templateUrl: './vacum-position-calculator.component.html',
  styleUrls: ['./vacum-position-calculator.component.scss']
})
export class VacumPositionCalculatorComponent implements OnInit {
  @Input() grid: Grid;
  @Input() vacum: Vacum;
  @Input() instructions: Instruction[];

  @Output() onGridChange: EventEmitter<Grid> = new EventEmitter();
  @Output() onVacumChange: EventEmitter<Vacum> = new EventEmitter();
  @Output() onNewVacumComputed: EventEmitter<Vacum> = new EventEmitter();

  constructor(private vacumService: VacumService) { }

  ngOnInit(): void {
    this.grid = { width: 10, height: 10 };
    this.vacum = { x: 0, y: 0, orientation: 'N' };
    this.instructions = ['D', 'A', 'D', 'A', 'D', 'A', 'D', 'A', 'A'];
  }

  onGridSizeChange(event) {
    const { name, value } = event.currentTarget;

    this.onGridChange.emit({
      ...this.grid,
      [name]: parseInt(value)
    });
  }

  onVacumInfoChange(event: any) {
    const { name, value } = event.currentTarget;

    this.onVacumChange.emit({
      ...this.vacum,
      [name]: parseInt(value)
    })
  }

  onGoClick() {
    const newVacum = this.vacumService.move(this.vacum, this.grid, this.instructions);

    this.onNewVacumComputed.emit(newVacum);
  }
}
