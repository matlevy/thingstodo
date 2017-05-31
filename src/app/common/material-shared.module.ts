import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, MdIconModule, MdSidenavModule, MdInputModule, MdDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule, MdButtonModule, MdIconModule, MdSidenavModule, MdInputModule, MdDialogModule
  ],
  exports: [
    MdCardModule, MdButtonModule, MdIconModule, MdSidenavModule, MdInputModule, MdDialogModule
  ],
  declarations: []
})
export class MaterialSharedModule { }
