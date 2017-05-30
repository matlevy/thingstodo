import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../things-services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public user:UserService) {}

  login() {
    this.user.authenticate();
  }

  logout() {
    this.user.logout();
  }

  ngOnInit() {
  }

}
