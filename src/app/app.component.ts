import { Component } from '@angular/core';
import { ThingsService } from './things-services/things.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ThingInsertComponent } from "./things-views/thing-insert/thing-insert.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public things:ThingsService, public dialogue:MdDialog ){

  }

  addNew() {
    let dialogueRef = this.dialogue.open( ThingInsertComponent );
    dialogueRef.afterClosed().subscribe( result=>{

    });
  }

  undoLast() {
    this.things.user.history.undoPreviousAction();
  }
}