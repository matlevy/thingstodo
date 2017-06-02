import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { IThingVO, ThingVO } from "./thing.vo";
import * as core from './history.service';

@Injectable()
export class UserService {

  authState: Observable<firebase.User>;
  userId: string;
  things: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase, public afAuth:AngularFireAuth, public history:core.history.HistoryService) { 
    this.authState = afAuth.authState;
    this.subscribeToLoginAuthstate();
  }

  private subscribeToLoginAuthstate(){
    this.authState.subscribe((user:firebase.User)=>{
      if(user!=null){
        this.userId=user.uid;
        this.things = this.getMyThings();
        this.things.subscribe( (data)=>{
          return data.map( (arr)=>{
            return arr.reverse();
          })
        });
      } else {
        this.userId==null;
        if(this.things)
          this.things.remove();
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

  deleteThing( thing ):Promise<any>{
    if( this.things )
      return Promise.resolve( this.things.remove( thing ) );
    return Promise.resolve({});
  }

  createNewThing():ThingVO {
    return new ThingVO();
  }

  saveNew( thing:ThingVO ):Promise<ThingVO> {    
    //this.history.storeAction( savePromise, 'Thing Saved', this.deleteThing(thing) ).do();
    return Promise.resolve( this.things.push( thing ) );
  }

  saveExisting( thing:any ) {
    this.things.update( thing.source.$key, thing );
  }

  get authenticated(){
    return this.authState!==null;
  }

  get thingsPath():string {
    return ['/things/',this.userId,'/things'].join();
  }

  getMyThings():FirebaseListObservable<any> {    
    return this.db.list(this.thingsPath, { 
      query:{
        orderByChild : "timestamp"
      }}).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
  }

}
