import { Component, Input, OnInit } from '@angular/core';
import { Direction } from '../../types/types'; 

@Component({
  selector: 'app-vacuum-position',
  templateUrl: './vacuum-position.component.html',
  styleUrls: ['./vacuum-position.component.scss']
})
export class VacumPositionComponent implements OnInit {
  @Input() x: number;
  @Input() y: number;
  @Input() direction: Direction

  constructor() { }

  ngOnInit(): void {
  }

}
