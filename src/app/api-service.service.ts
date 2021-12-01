import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Hero } from './hero';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService 
{

  constructor(private http : HttpClient) { }
  
  internUrl = "http://localhost:64553/api/Interns";
  projectUrl = "http://localhost:64553/api/Projects";

  getInterns()
  {
    let url = "https://localhost:44346/api/Interns";
    let data = this.http.get(url);
    return data;
  }
  getProjects()
  {
    let url = "https://localhost:44346/api/Projects";
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


