import { Component, OnInit, Input } from '@angular/core';
import { IThingVO, ThingVO } from '../../things-services/thing.vo';
import { ThingsService } from "../../things-services/things.service";
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-thing-insert',
  templateUrl: './thing-insert.component.html',
  styleUrls: ['./thing-insert.component.css','../shared/thing-card.css']
})
export class ThingInsertComponent implements OnInit {

  @Input() thing:ThingVO;

  constructor( public dialogueRef:MdDialogRef<any>, public things:ThingsService, public dialogue:MdDialog ) { 
    
  }

  ngOnInit() {
    if( this.thing==null )
      this.thing = this.things.user.createNewThing();
  }

  save():void {
    if(this.things.user.authenticated){
      if(this.thing.source){
        this.things.user.saveExisting( this.thing );
        this.dialogue.closeAll();
      } else {
        this.things.user.saveNew( this.thing );
        this.thing.reset();
        this.dialogue.closeAll();
      }
    }    
  }

}
