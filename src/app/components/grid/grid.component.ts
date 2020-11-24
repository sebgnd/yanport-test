import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Grid, Position, Status } from 'src/app/types/types';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() grid: Grid;
  @Input() start: Position | null;
  @Input() end: Position | null;
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

    if (this.end && x === this.end.x && y === this.end.y) {
      return 'end';
    }
    if (this.start && x === this.start.x && y === this.start.y) {
      return 'start';
    }
    if (this.grayedPositions && this.grayedPositions.has(strPosition)) {
      return 'path';
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
