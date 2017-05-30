import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from  '@angular/material';
import { ThingsServicesModule } from './things-services/things-services.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MdCardModule, MdButtonModule, MdIconModule, ThingsServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }