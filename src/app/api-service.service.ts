import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService 
{

  constructor(private http : HttpClient) { }

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
}


