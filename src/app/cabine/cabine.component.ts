import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cabine',
  templateUrl: './cabine.component.html',
  styleUrls: ['./cabine.component.css']
})
export class CabineComponent {

  constructor() {
    this.options = [];
  }

  @Input() options: any[];
  @Output() vote:EventEmitter<number> = new EventEmitter<number>();

}
