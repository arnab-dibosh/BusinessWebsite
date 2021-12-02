import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Project } from '../project';
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
  projectsData: any = []; 
  internsData : any = [];
  mappingData : any = [];
  currentProject : any;
  projectList : any = [];


  ngOnInit(): void {
    //this.getHero();

    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.apiService.getIntern(id).subscribe(
      (data: Hero | undefined) => { this.intern = data; }
    );

    this.getAssignedProjects();
    
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero: Hero | undefined) => this.hero = hero);
  }

  getAssignedProjects()
  {
    /* getting intern id from url */ 
    const intern_id = Number(this.route.snapshot.paramMap.get('id'));

    /* getting project list from database through api */
    this.apiService.getProjects().subscribe ( 
      ( data : any ) => { this.projectsData = data; } );

    /* getting intern project mapping data from database through api */
    this.apiService.getInternProject().subscribe(
      ( data : any ) => { this.mappingData = data; });

    for(let i=0;i<this.mappingData.length;++i)
    {
      if(intern_id === this.mappingData[i].intern_ID)
      {
        let projectID = this.mappingData[i].project_ID;
        console.log('project id is ' + projectID);

        this.apiService.getProject(projectID).subscribe(
          (data: Project | undefined) => { this.currentProject = data; }
        );

        console.log(this.currentProject.name);

        this.projectList.push(this.currentProject.name);  
      }
    }
    console.log(this.projectList);
    
  }


  goBack(): void {
    this.location.back();
  }
  
}
