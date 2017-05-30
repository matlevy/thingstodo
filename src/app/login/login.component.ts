import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../things-services/user.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(public userSvc:UserService) { 
    this.user = userSvc.user;
  }

  login() {
    this.userSvc.authenticate();
  }

  logout() {
    this.userSvc.logout();
  }

  ngOnInit() {
  }

}
