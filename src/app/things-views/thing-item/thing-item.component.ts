import { Component, OnInit, Input } from '@angular/core';
import { ThingsService } from '../../things-services/things.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ThingInsertComponent } from "../thing-insert/thing-insert.component";

@Component({
  selector: 'app-thing-item',
  templateUrl: './thing-item.component.html',
  styleUrls: ['./thing-item.component.css','../shared/thing-card.css']
})
export class ThingItemComponent implements OnInit {

  @Input() thing:object

  constructor( public dialogue:MdDialog, public things:ThingsService ) {
    
  }

  deleteThing() {
    this.things.user.deleteThing(this.thing);
  }

  editThing() {
    let dialogueRef = this.dialogue.open( ThingInsertComponent );
    dialogueRef.componentInstance.thing = this.things.user.createNewThing()
    dialogueRef.componentInstance.thing.setSource(this.thing);
  }

  ngOnInit() {
  }

}
