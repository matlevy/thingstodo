import { Component } from '@angular/core';
import { ThingsService } from './things-services/things.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public things:ThingsService ){

  }
}