import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Grid, Instruction, Vacum, VacumWithPositions } from '../../types/types';
import { VacumService } from '../../services/vacum.service';

@Component({
  selector: 'app-vacum-position-calculator',
  templateUrl: './vacum-position-calculator.component.html',
  styleUrls: ['./vacum-position-calculator.component.scss']
})
export class VacumPositionCalculatorComponent implements OnInit {
  instructionString: string;

  @Input() grid: Grid;
  @Input() vacum: Vacum;
  @Input() instructions: Instruction[];

  @Output() onGridChange: EventEmitter<Grid> = new EventEmitter();
  @Output() onVacumChange: EventEmitter<Vacum> = new EventEmitter();
  @Output() onNewVacumComputed: EventEmitter<VacumWithPositions> = new EventEmitter();
  @Output() onInstructionsChange: EventEmitter<Instruction[]> = new EventEmitter();

  constructor(private vacumService: VacumService) { }

  ngOnInit(): void {
    this.instructionString = '';
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

  handleInstructionsChange(event: any) {
    const { value } = event.currentTarget;
    const instructions = this.vacumService.generateInstructions(value);

    this.instructionString = value;
    this.onInstructionsChange.emit(instructions);
  }

  onGoClick() {
    const vacumWithPositions = this.vacumService.move(this.vacum, this.grid, this.instructions);
    console.log(vacumWithPositions);

    this.onNewVacumComputed.emit(vacumWithPositions);
  }
}
