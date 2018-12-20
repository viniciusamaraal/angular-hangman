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
  
      it('should create', () => {
        expect(ts).toBeTruthy();
      });

      it('should define game over', () => {
        ts.imageId = 7;
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

      it('should display the picture of a hang with a man (body parts: head)', () => {
        ts.imageId = 2;
        fixture.detectChanges();
        const imageElement = fixture.debugElement.query(By.css('.doll-image'));
        
        expect(imageElement.nativeElement.getAttribute('src')).toContain('hang-2');
      });

      it('should display the picture of a hang with a man (body parts: head and trunk)', () => {
        ts.imageId = 3;
        fixture.detectChanges();
        const imageElement = fixture.debugElement.query(By.css('.doll-image'));
        
        expect(imageElement.nativeElement.getAttribute('src')).toContain('hang-3');
      });

      it('should display the picture of a hang with a man (body parts: head, trunk and left arm)', () => {
        ts.imageId = 4;
        fixture.detectChanges();
        const imageElement = fixture.debugElement.query(By.css('.doll-image'));
        
        expect(imageElement.nativeElement.getAttribute('src')).toContain('hang-4');
      });

      it('should display the picture of a hang with a man (body parts: head, trunk, left arm and right arm)', () => {
        ts.imageId = 5;
        fixture.detectChanges();
        const imageElement = fixture.debugElement.query(By.css('.doll-image'));
        
        expect(imageElement.nativeElement.getAttribute('src')).toContain('hang-5');
      });

      it('should display the picture of a hang with a man (body parts: head, trunk, left arm, right arm and left leg)', () => {
        ts.imageId = 6;
        fixture.detectChanges();
        const imageElement = fixture.debugElement.query(By.css('.doll-image'));
        
        expect(imageElement.nativeElement.getAttribute('src')).toContain('hang-6');
      });

      it('should display the picture of a hang with a man (body parts: head, trunk, left arm, right arm, left leg and right leg)', () => {
        ts.imageId = 7;
        fixture.detectChanges();
        const imageElement = fixture.debugElement.query(By.css('.doll-image'));
        
        expect(imageElement.nativeElement.getAttribute('src')).toContain('hang-7');
      });
    });
  });
  