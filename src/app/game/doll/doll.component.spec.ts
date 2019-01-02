import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DollComponent } from './doll.component';

describe('DollComponent', () => {
    let ts: DollComponent;
    let fixture: ComponentFixture<DollComponent>;
  
    describe('Unit Tests', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [DollComponent],
          schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
      }));
  
      beforeEach(() => {
        fixture = TestBed.createComponent(DollComponent);
        ts = fixture.componentInstance;
  
        fixture.detectChanges();
      });
    });
  
    describe('Component Tests', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [DollComponent],
          schemas: [DollComponent],
        }).compileComponents();
      }));
  
      beforeEach(() => {
        fixture = TestBed.createComponent(DollComponent);
        ts = fixture.componentInstance;
      });
  
      it('should display the picture of an empty hang', () => {
        ts.imageId = 1;
        fixture.detectChanges();
        const imageElement = fixture.debugElement.query(By.css('.doll-image'));
        
        expect(imageElement.nativeElement.getAttribute('src')).toContain('hang-1');
      });

      
    });
  });
  