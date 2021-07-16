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

  vote(index: number){
    this.options[index].count = this.options[index].count + 1;
    this.mode = 'closed';
  }

}
