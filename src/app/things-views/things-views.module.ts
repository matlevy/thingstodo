import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from './../common/material-shared.module';
import { ThingItemComponent } from './thing-item/thing-item.component';
import { ThingInsertComponent } from './thing-insert/thing-insert.component';

@NgModule({
  imports: [
    CommonModule, 
    MaterialSharedModule,
    FormsModule
  ],
  exports: [
    ThingItemComponent
  ],
  declarations: [ThingItemComponent, ThingInsertComponent]
})
export class ThingsViewsModule { }
