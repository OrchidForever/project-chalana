import { Component } from '@angular/core';
import { character } from './data/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Project Chalana';
  characters = character;
}
