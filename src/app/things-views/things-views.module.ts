import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingItemComponent } from './thing-item/thing-item.component';
import { MaterialSharedModule } from './../common/material-shared.module';

@NgModule({
  imports: [
    CommonModule, 
    MaterialSharedModule
  ],
  exports: [
    ThingItemComponent
  ],
  declarations: [ThingItemComponent]
})
export class ThingsViewsModule { }
