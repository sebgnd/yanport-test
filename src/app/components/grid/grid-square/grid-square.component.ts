import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Position, Status } from '../../../types/types';

@Component({
  selector: 'app-grid-square',
  templateUrl: './grid-square.component.html',
  styleUrls: ['./grid-square.component.scss']
})
export class GridSquareComponent implements OnInit {
  @Input() x: number;
  @Input() y: number;
  @Input() status: Status;

  @Output() click: EventEmitter<Position> = new EventEmitter();

  handleClicked(event: any) {
    event.stopPropagation();
    this.click.emit({ 
      x: this.x, 
      y: this.y 
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
