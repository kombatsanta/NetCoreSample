import { TestBed, inject } from '@angular/core/testing';

import { EventBusService } from './eventbus.service';

describe('EventbusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBusService]
    });
  });

  it('should be created', inject([EventBusService], (service: EventBusService) => {
    expect(service).toBeTruthy();
  }));
});
