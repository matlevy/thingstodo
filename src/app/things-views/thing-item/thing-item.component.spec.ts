import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingItemComponent } from './thing-item.component';

xdescribe('ThingItemComponent', () => {
  let component: ThingItemComponent;
  let fixture: ComponentFixture<ThingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
