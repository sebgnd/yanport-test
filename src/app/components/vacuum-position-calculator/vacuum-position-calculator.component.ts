import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Grid, Instruction, Vacuum, VacuumWithPositions } from '../../types/types';
import { VacuumService } from '../../services/vacuum.service';

@Component({
  selector: 'app-vacuum-position-calculator',
  templateUrl: './vacuum-position-calculator.component.html',
  styleUrls: ['./vacuum-position-calculator.component.scss']
})
export class VacuumPositionCalculatorComponent implements OnInit {
  instructionString: string;

  @Input() grid: Grid;
  @Input() vacuum: Vacuum;
  @Input() instructions: Instruction[];

  @Output() onGridChange: EventEmitter<Grid> = new EventEmitter();
  @Output() onVacuumChange: EventEmitter<Vacuum> = new EventEmitter();
  @Output() onNewVacuumComputed: EventEmitter<VacuumWithPositions> = new EventEmitter();
  @Output() onInstructionsChange: EventEmitter<Instruction[]> = new EventEmitter();

  constructor(private vacuumService: VacuumService) { }

  ngOnInit(): void {
    this.instructionString = '';
  }

  onGridSizeChange(event: any) {
    const { name, value } = event.currentTarget;

    this.onGridChange.emit({
      ...this.grid,
      [name]: parseInt(value)
    });
  }

  onVacuumInfoChange(event: any) {
    const { name, value } = event.currentTarget;

    this.onVacuumChange.emit({
      ...this.vacuum,
      [name]: parseInt(value)
    })
  }

  handleInstructionsChange(event: any) {
    const { value } = event.currentTarget;
    const instructions = this.vacuumService.generateInstructions(value);

    this.instructionString = value;
    this.onInstructionsChange.emit(instructions);
  }

  onGoClick() {
    const vacuumWithPositions = this.vacuumService.move(this.vacuum, this.grid, this.instructions);
    console.log(vacuumWithPositions);

    this.onNewVacuumComputed.emit(vacuumWithPositions);
  }
}
