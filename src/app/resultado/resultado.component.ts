import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor() {
    this.options = [];
   }

  @Input() options: any[]

  ngOnInit(): void {
  }

}
