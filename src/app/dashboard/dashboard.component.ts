import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Project} from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  projects: Project[] = [];

  constructor(private heroService: HeroService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getProjects();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects.slice(0,4));
  }

}
