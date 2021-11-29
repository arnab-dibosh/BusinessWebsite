import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';
import { HEROES } from '../mock-heroes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  selectedProject?: Project;

  projects: Project[] = [];

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private messageService: MessageService, private location: Location) { }

  ngOnInit(): void {
    this.getProjects();
    
  }
  OnSelect(project: Project){
    this.selectedProject = project;
    this.messageService.add(`ProjectsComponent: Selected project id = ${project.id}`)
  }
  getProjects(): void{
    this.projectService.getProjects().subscribe((projects: Project[]) => this.projects = projects); 
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let index = HEROES.findIndex(x => x.id === id);
    HEROES[index].projectList.push('Angular');
  }
  buttonVisible(): void {
    let isButtonVisible = false;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id != null){
       isButtonVisible = true;
    }
  }
}
