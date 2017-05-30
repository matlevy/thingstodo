import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule, AngularFireDatabaseModule
  ],
  declarations: [],
  providers: [UserService]
})
export class ThingsServicesModule { }
