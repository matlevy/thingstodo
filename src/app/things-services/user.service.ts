import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  authState: Observable<firebase.User>;
  userId: string;

  constructor(private db: AngularFireDatabase, public afAuth:AngularFireAuth) { 
    this.authState = afAuth.authState;
    this.subscribeToLoginAuthstate();
  }

  private subscribeToLoginAuthstate(){
    this.authState.subscribe((user:firebase.User)=>{
      if(user!=null){
        this.userId=user.uid;
      } else {
        this.userId==null;
      }
    });
  }

  authenticate():firebase.Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
  }

  logout():firebase.Promise<string> {
    return this.afAuth.auth.signOut();
  }

  saveThing( title:string, subtitle:string, body:string ) {
    return this.db.list(this.thingsPath).push({title:title,subtitle:subtitle,body:body,type:'text'});
  }

  get authenticated(){
    return this.authState!==null;
  }

  get thingsPath():string {
    return ['/things/',this.userId,'/things'].join();
  }

  get myThings() {    
    return this.db.list(this.thingsPath);
  }

}
