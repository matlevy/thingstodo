import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, MdIconModule, MdSidenavModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule, MdButtonModule, MdIconModule, MdSidenavModule, MdInputModule
  ],
  exports: [
    MdCardModule, MdButtonModule, MdIconModule, MdSidenavModule, MdInputModule
  ],
  declarations: []
})
export class MaterialSharedModule { }
