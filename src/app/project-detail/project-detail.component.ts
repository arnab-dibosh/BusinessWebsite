import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service'
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project?: Project;
  constructor(private route: ActivatedRoute, private projectService: ProjectService, private location: Location, private apiService: ApiServiceService) { }

  ngOnInit(): void {
    //this.getProject();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getProject(id).subscribe(((project: Project | undefined) => this.project = project));
  }

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProject(id).subscribe((project: Project | undefined) => this.project = project);
  }
  goBack(): void {
    this.location.back();
  }

}
