import { TestBed } from '@angular/core/testing';

import { GlobalEventsService } from './global-events.service';

describe('Data.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalEventsService = TestBed.get(GlobalEventsService);
    expect(service).toBeTruthy();
  });
});
