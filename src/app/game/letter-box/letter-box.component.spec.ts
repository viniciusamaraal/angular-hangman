import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LetterBoxComponent } from './letter-box.component';


describe('LetterBoxComponent', () => {
  let ts: LetterBoxComponent;
  let fixture: ComponentFixture<LetterBoxComponent>;

  describe('Unit Tests', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [LetterBoxComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(LetterBoxComponent);
      ts = fixture.componentInstance;

      ts.letter = { value: 'L', display: true };

      fixture.detectChanges();
    });

    it('should create', () => {
      expect(ts).toBeTruthy();
    });
  });

  describe('Component Tests', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [LetterBoxComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(LetterBoxComponent);
      ts = fixture.componentInstance;

      ts.letter = { value: 'L', display: true };

      fixture.detectChanges();
    });

    it('should display a letter inside the box when the letter IS visible', () => {
      ts.letter.display = true;
      fixture.detectChanges();

      const divContent = (<Element>fixture.debugElement.query(By.css('.letter-box')).nativeElement).textContent.trim();
      expect(divContent).toEqual('L');
    });

    it('should display a letter inside the box when the letter IS NOT visible', () => {
        ts.letter.display = false;
        fixture.detectChanges();
  
        const divContent = (<Element>fixture.debugElement.query(By.css('.letter-box')).nativeElement).textContent.trim();
        expect(divContent).toEqual('');
      });
  });
});
