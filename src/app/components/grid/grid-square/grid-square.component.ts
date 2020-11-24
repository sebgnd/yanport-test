import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Position, Status, Direction } from '../../../types/types';

@Component({
  selector: 'app-grid-square',
  templateUrl: './grid-square.component.html',
  styleUrls: ['./grid-square.component.scss']
})
export class GridSquareComponent implements OnInit {
  @Input() x: number;
  @Input() y: number;
  @Input() direction: Direction | null;
  @Input() status: Status;

  @Output() onClick: EventEmitter<Position> = new EventEmitter();

  handleClicked(event: any) {
    console.log('clicked');
    event.stopPropagation();
    this.onClick.emit({ 
      x: this.x, 
      y: this.y 
    });
  }

  getDirectionClass() {
    if (this.direction) console.log(this.direction);
    switch (this.direction) {
      case 'E': return 'border-right';
      case 'N': return 'border-top';
      case 'S': return 'border-bottom';
      case 'W': return 'border-left';
      default: return '';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
