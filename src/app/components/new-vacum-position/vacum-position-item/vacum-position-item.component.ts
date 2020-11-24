import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacum-position-item',
  templateUrl: './vacum-position-item.component.html',
  styleUrls: ['./vacum-position-item.component.scss']
})
export class VacumPositionItemComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
