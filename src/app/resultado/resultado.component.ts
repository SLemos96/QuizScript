import { Component, Input } from '@angular/core';

@Component({
  selector: 'resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent{

  constructor() {
    this.options = [];
   }

  @Input() options: any[]

  ngOnInit(): void {
  }

}
