import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  selectedProject?: Project;

  projects: Project[] = [];

  constructor(private projectService: ProjectService, private messageService: MessageService, private location: Location) { }

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
    
  }

  onCheck(): void 
  {
    console.log(this.getProjects());
  }
}
