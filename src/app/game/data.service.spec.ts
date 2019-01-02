import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from './data.service';

describe('DataService', () => {

  describe('Unit Tests', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      }).compileComponents();
    }));

    it('should be created', () => {
      const service: DataService = TestBed.get(DataService);
      expect(service).toBeTruthy();
    });
  });
});
