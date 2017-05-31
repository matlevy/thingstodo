import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ThingsService } from './things.service';

@NgModule({
  imports: [
    CommonModule, AngularFireDatabaseModule
  ],
  declarations: [],
  providers: [UserService, ThingsService]
})
export class ThingsServicesModule { }
