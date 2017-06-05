import { TestBed, inject } from '@angular/core/testing';

import { ThingsService } from './things.service';

xdescribe('ThingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThingsService]
    });
  });

  it('should be created', inject([ThingsService], (service: ThingsService) => {
    expect(service).toBeTruthy();
  }));
});
