import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class ThingsService {

  constructor( public user:UserService ) { }

}
