import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  authState: Observable<firebase.User>;
  userData: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase, public afAuth:AngularFireAuth) { 
    this.authState = afAuth.authState;
  }

  authenticate():firebase.Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
  }

  logout():firebase.Promise<string> {
    return this.afAuth.auth.signOut();
  }

}
