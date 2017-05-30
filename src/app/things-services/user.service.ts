import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  user: Observable<firebase.User>;

  constructor(db: AngularFireDatabaseModule, public afAuth:AngularFireAuth) { 
    this.user = afAuth.authState;
  }

  authenticate() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
