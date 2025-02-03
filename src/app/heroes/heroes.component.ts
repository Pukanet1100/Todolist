import { Component, OnInit } from '@angular/core';

import { Hero } from '../interface/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | null = null;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  edit(hero: Hero): void {
    this.selectedHero = { ...hero };
  }

  saveEdit(): void {
    if (!this.selectedHero) return;
    const index = this.heroes.findIndex(h => h.id === this.selectedHero!.id);
    if (index !== -1) {
      this.heroes[index] = { ...this.selectedHero };
    }
    this.selectedHero = null;
  }

  closePopup(): void {
    this.selectedHero = null;
  }
}
