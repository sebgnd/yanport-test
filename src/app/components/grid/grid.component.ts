import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Grid, Position, Status, Vacuum, Direction } from 'src/app/types/types';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() grid: Grid;
  @Input() startVacum: Vacuum;
  @Input() endVacum: Vacuum | null;
  @Input() grayedPositions: Set<string> | null;
  @Output() squareClicked: EventEmitter<Position> = new EventEmitter();

  rows: number[];
  columns: number[];

  handleClick(position: Position) {
    this.squareClicked.emit({
      x: position.x, 
      y: position.y
    });
  }

  getStatus(x: number, y: number): Status {
    const strPosition = x.toString() + y.toString();

    if (this.endVacum && x === this.endVacum.x && y === this.endVacum.y) {
      return 'end';
    }
    if (this.startVacum && x === this.startVacum .x && y === this.startVacum .y) {
      return 'start';
    }
    if (this.grayedPositions && this.grayedPositions.has(strPosition)) {
      return 'path';
    }
  }

  getDirection(x: number, y: number): Direction | null {
    const status = this.getStatus(x, y);

    switch (status) {
      case 'end': return this.endVacum.direction;
      case 'start': return this.startVacum.direction;
      default: return null
    }
  }

  updateGrid() {
    this.rows = Array(this.grid.height).fill(0);
    this.columns = Array(this.grid.width).fill(0);
  }

  constructor() { }

  ngOnInit(): void {
    this.updateGrid();
  }

  ngOnChanges(): void {
    this.updateGrid();
  }
}
