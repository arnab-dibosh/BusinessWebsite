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
  
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), mode: 'no-cors', method:'*'}
  internUrl = "https://localhost:44346/api/Interns";
  projectUrl = "https://localhost:44346/api/Projects";
  internProjectUrl = "https://localhost:44346/api/intern_project";

  getInterns()
  {
    let url = this.internUrl;
    let data = this.http.get(url);
    return data;
  }

  getProjects() : Observable<Project[]>
  {
    let url = this.projectUrl;
    return this.http.get<Project[]>(url);
  }

  getInternProject() : Observable<Intern_Project[]>
  {
    let url = this.internProjectUrl;
    return this.http.get<Intern_Project[]>(url);
  }


  getIntern(id: number): Observable<Hero>{
    const url = `${this.internUrl}/${id}`;
    return this.http.get<Hero>(url);
  }
  getProject(id: number): Observable<Project>{
    const url = `${this.projectUrl}/${id}`;
    return this.http.get<Project>(url);
  }

  assignProject(i_id: number, p_id: number) : Observable<Intern_Project>
  {
    const url = `${this.internProjectUrl}`;
    let httpOptions = 
    {
      headers : new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Intern_Project>(url, { intern_id : i_id, project_id: p_id } as Intern_Project , httpOptions);
  }

  deleteHero(id:number): Observable<Hero> {
    const url = `${this.internUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions)
  }
  deleteProject(id:number): Observable<Project> {
    const url = `${this.projectUrl}/${id}`;
    return this.http.delete<Project>(url, this.httpOptions);
  }

}


