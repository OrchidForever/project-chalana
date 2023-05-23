import { Component, Input, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { characterType } from '../data/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() character: characterType;

  constructor() { }

  ngOnInit() {
    console.log(this.character);
  }

}
