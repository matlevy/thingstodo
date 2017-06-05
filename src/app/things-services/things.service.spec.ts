import { TestBed, inject } from '@angular/core/testing';
import { ThingsService } from './things.service';
import { UserService } from './user.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ThingsServicesModule } from './things-services.module';
import { AngularFireModule } from 'angularfire2';
import { AppModule } from "../app.module";

describe('ThingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThingsService,UserService],
      imports: [
        AngularFireDatabaseModule,
        ThingsServicesModule,
        AppModule
      ],
    });
  });

  it('should be created', inject([ThingsService], (service: ThingsService) => {
    expect(service).toBeTruthy();
    expect(service.user).toBeTruthy();
  }));
});
