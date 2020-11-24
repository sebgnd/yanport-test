import { Component, Input, OnInit } from '@angular/core';
import { Vacum } from 'src/app/types/types';

@Component({
  selector: 'app-new-vacum-position',
  templateUrl: './new-vacum-position.component.html',
  styleUrls: ['./new-vacum-position.component.scss']
})
export class NewVacumPositionComponent implements OnInit {
  @Input() newVacum: Vacum | null;

  yLabel: string;
  xLabel: string;
  orientationLabel: string;

  constructor() { }

  ngOnInit(): void {
    this.xLabel = 'x';
    this.yLabel = 'y';
    this.orientationLabel = 'orientation';
  }

}
