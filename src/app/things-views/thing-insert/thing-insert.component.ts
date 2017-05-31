import { Component, OnInit } from '@angular/core';
import { ThingVO } from '../../things-services/thing.vo';
import { ThingsService } from "../../things-services/things.service";

@Component({
  selector: 'app-thing-insert',
  templateUrl: './thing-insert.component.html',
  styleUrls: ['./thing-insert.component.css','../shared/thing-card.css']
})
export class ThingInsertComponent implements OnInit {

  thing:ThingVO;

  constructor( public things:ThingsService ) { }

  ngOnInit() {
    this.thing = this.things.user.createNewThing();
  }

  save():void {
    if(this.things.user.authenticated){
      this.things.user.saveNew( this.thing );
      this.thing.reset();
    }    
  }

}
