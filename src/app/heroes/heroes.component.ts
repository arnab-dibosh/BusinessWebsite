import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero?: Hero;

  heroes: Hero[] = []; 

  internsData: any = [];

  constructor(private heroService: HeroService, 
              private messageService: MessageService,
              private apiService : ApiServiceService) { }

  ngOnInit(): void {
    //this.getHeroes();

    this.apiService.getInterns().subscribe
    (
      data => 
      {
        this.internsData = data;
        console.log(this.internsData[0]);
      }
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => this.heroes = heroes);
  }
}
