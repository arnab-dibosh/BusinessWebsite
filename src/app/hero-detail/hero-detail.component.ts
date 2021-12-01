import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;
  	constructor(private route: ActivatedRoute, 
				private heroService: HeroService, 
        private location: Location,
        private apiService: ApiServiceService ) { }

  intern: any; 

  ngOnInit(): void {
    //this.getHero();
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.apiService.getIntern(id).subscribe(
      (data: Hero | undefined) => { this.intern = data; }
    );
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero: Hero | undefined) => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  
}
