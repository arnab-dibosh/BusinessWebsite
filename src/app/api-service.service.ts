import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Hero } from './hero';
import { Project } from './project';
import { Intern_Project} from './intern_project';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService 
{

  constructor(private http : HttpClient) { }
  
  internUrl = "https://localhost:64553/api/Interns";
  projectUrl = "https://localhost:64553/api/Projects";
  internProjectUrl = "http://localhost:64553/api/intern_project";

  getInterns()
  {
    let url = this.internUrl;
    let data = this.http.get(url);
    return data;
  }
  getProjects()
  {
    let url = this.projectUrl;
    let data = this.http.get(url);
    return data;
  }
  getIntern(id: number): Observable<Hero>{
    const url = `${this.internUrl}/${id}`;
    return this.http.get<Hero>(url);
  }
  getProject(id: number): Observable<Project>{
    const url = `${this.projectUrl}/${id}`;
    return this.http.get<Project>(url);
  }

  
}


