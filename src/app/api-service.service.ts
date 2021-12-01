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
    let url = "http://localhost:64553/api/Interns";
    let data = this.http.get(url);
    return data;
  }
  getProjects()
  {
    let url = "http://localhost:64553/api/Projects";
    let data = this.http.get(url);
    return data;
  }
}


