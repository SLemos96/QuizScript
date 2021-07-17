import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(){
    this.statement = '';
    this.options = [];
    this.mode = 'open';
  }
  mode = 'open';
  @Input() statement: string
  @Input() options: any[]

  vote(i: number){
    console.log("entrei aqui");
    this.options[i].count = this.options[i].count + 1;
    this.mode = 'closed';
  }

}
