import { Component, OnInit, Input } from '@angular/core';
import { ThingsService } from '../../things-services/things.service';

@Component({
  selector: 'app-thing-item',
  templateUrl: './thing-item.component.html',
  styleUrls: ['./thing-item.component.css']
})
export class ThingItemComponent implements OnInit {

  @Input() thing:object

  constructor( public things:ThingsService ) {
    
  }

  deleteThing() {
    this.things.user.deleteThing(this.thing);
  }

  ngOnInit() {
  }

}
