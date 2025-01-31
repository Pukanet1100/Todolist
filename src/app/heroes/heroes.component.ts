import { Component } from '@angular/core';
import { Hero } from '../interface/hero'

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HerosComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
