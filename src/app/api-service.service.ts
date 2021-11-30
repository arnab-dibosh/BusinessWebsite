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
	  let url = "https://localhost:44394/api/Interns";
	  return this.http.get(url);
  }
}


