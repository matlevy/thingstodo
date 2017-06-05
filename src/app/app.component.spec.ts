import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MaterialSharedModule } from './common/material-shared.module';
import { ThingsServicesModule } from './things-services/things-services.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ThingsViewsModule } from './things-views/things-views.module';
import { ThingItemComponent } from './things-views/thing-item/thing-item.component';
import { ThingInsertComponent } from './things-views/thing-insert/thing-insert.component';

xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      LoginComponent, ThingItemComponent, ThingInsertComponent
    ],
    imports: [
      BrowserModule, FormsModule, HttpModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      MaterialSharedModule,
      ThingsServicesModule, BrowserAnimationsModule
    ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
