import { TestBed, inject, async } from '@angular/core/testing';
import { UserService } from './user.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ThingsServicesModule } from './things-services.module';
import { AppModule } from "../app.module";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

let users:UserService;

const mockThings = [
  { title: 'title', subtitle:'subtitle', body:'body', timestamp:12345 },
  { title: 'title', subtitle:'subtitle', body:'body', timestamp:12345 },
  { title: 'title', subtitle:'subtitle', body:'body', timestamp:12345 },
]

const angularFireAuthMock = {
  authState: Observable.of({uid:1234}),
  auth: {
    signInWithPopup: ()=>{
      alert('sdfsdf');
      return new Promise((resolve,reject)=>{
        return resolve(true);
      })
    }
  }
}

const angularFireDatabaseMock = {
  list: ()=>{
    return Observable.of(mockThings);
  }
}

describe('UserService',() => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,        
        { provide: AngularFireAuth, useValue: angularFireAuthMock },
        { provide: AngularFireDatabase, useValue: angularFireDatabaseMock },        
      ],
      imports: [
        AngularFireDatabaseModule,
        ThingsServicesModule,
        AppModule
      ],
    });
  });

  it('should be created',inject([UserService],(service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should attempt to authenticate using a popup',async( inject([UserService],(service: UserService) => {
    service.authenticate().then( returned=>{
      expect(returned).toBeTruthy();
    });
  })));
});
