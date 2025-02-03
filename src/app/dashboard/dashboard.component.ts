import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | null = null;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
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