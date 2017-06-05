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

  deleteThing( thing, undoable=false ):Promise<any>{
    if( undoable ){
      let deleteAction:core.history.Runnable = new core.history.Runnable(()=>{
        return this.deleteThing( thing );
      });
      let undeleteAction:core.history.Runnable = new core.history.Runnable(()=>{
        return this.things.push(thing);
      });
      return this.history.storeAction(deleteAction, 'Thing Saved', undeleteAction).do<Promise<ThingVO>>();
    } else {
      if( this.things )
        return Promise.resolve( this.things.remove( thing ) );
      return Promise.reject('Item cannot be removed from list as there is not list available');
    }        
  }

  createNewThing():ThingVO {
    return new ThingVO();
  }

  saveNew( thing:ThingVO ):Promise<ThingVO> {   
    let saveAction:core.history.Runnable = new core.history.Runnable(()=>{
      return this.things.push(thing).then( data=>{
        thing.setSource(data);
        return Promise.resolve(thing);
      });
    });
    let unsaveAction:core.history.Runnable = new core.history.Runnable(()=>{
      return this.deleteThing( thing.source ).then( data=>{
        thing.setSource(null);
        return Promise.resolve(thing);
      })
    })
    return this.history.storeAction(saveAction, 'Thing Saved', unsaveAction).do<Promise<ThingVO>>();
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
    return this.db.list(this.thingsPath);
  }

}
