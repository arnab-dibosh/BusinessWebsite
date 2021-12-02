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
  projectsData: any = []; 
  internsData : any = [];
  mappingData : any = [];
  currentProject : any;
  projectList : any = [];
  canOne: boolean = false;
  canTwo: boolean = false;

  ngOnInit(): void {
    //this.getHero();
    
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.apiService.getIntern(id).subscribe(
      (data: Hero | undefined) => { this.intern = data; }
    )

    /* getting project list from database through api */   
    this.apiService.getProjects().subscribe ( 
      ( data : any ) => { this.projectsData = data; this.canOne = true; } );

    
    /* getting intern project mapping data from database through api */
    this.apiService.getInternProject().subscribe(
      ( data : any ) => 
      { 
        this.mappingData = data; this.canTwo = true;
        
        if(this.canOne && this.canTwo) 
        {
          /**  getting assigned project for the intern */
          this.getAssignedProjects();
        }
        else { console.log('this is hopeless'); }
      });
    
  }


  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero: Hero | undefined) => this.hero = hero);
  }

  getAssignedProjects()
  { 
    const intern_id = Number(this.route.snapshot.paramMap.get('id'));     

    for(let i=0;i<this.mappingData.length;++i)
    {
      if(intern_id === this.mappingData[i].intern_ID)
      {
        let projectID = this.mappingData[i].project_ID;

        for(let p = 0;p<this.projectsData.length;++p)
        {
          if(projectID === this.projectsData[p].id)
          {
            this.projectList.push(this.projectsData[p].name);
          }
          
        }
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
  
}
