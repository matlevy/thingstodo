import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingItemComponent } from './thing-item/thing-item.component';
import { MdCardModule, MdButtonModule, MdIconModule, MdSidenavModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    MdCardModule, MdButtonModule, MdIconModule, MdSidenavModule, MdInputModule
  ],
  declarations: [ThingItemComponent]
})
export class ThingsViewsModule { }
