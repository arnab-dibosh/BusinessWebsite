import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InternsService } from './interns.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Intern Management';

  constructor(private titleService:Title, private user: InternsService ){
    this.titleService.setTitle("Intern Management");
  }
}
