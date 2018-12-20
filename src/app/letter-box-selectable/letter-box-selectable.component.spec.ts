import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LetterBoxSelectableComponent } from './letter-box-selectable.component';

describe('LetterBoxSelectableComponent', () => {
  let ts: LetterBoxSelectableComponent;
  let fixture: ComponentFixture<LetterBoxSelectableComponent>;

  describe('Unit Tests', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [LetterBoxSelectableComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(LetterBoxSelectableComponent);
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
        declarations: [LetterBoxSelectableComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(LetterBoxSelectableComponent);
      ts = fixture.componentInstance;
    });

    it('should display a letter inside the box', () => {
      ts.letter = { value: 'L', display: true };
      fixture.detectChanges();
      const divContent = (<Element>fixture.debugElement.query(By.css('.letter-box')).nativeElement).textContent.trim();
      // const divContent2 = (<Element>fixture.debugElement.nativeElement).querySelector('.letter-box').textContent.trim();
      // console.log(divContent + ' ' + divContent2);
      expect(divContent).toEqual('L');
    });

    // it('should mouse over', () => {
    //   ts.letter = { value: 'L', display: true };
    //   fixture.detectChanges();
      
    //   const debugElement = fixture.debugElement.queryAll(By.directive(LetterBoxSelectableComponent));
    //   // debugElement.triggerEventHandler('onmouseover', { pageX:50, pageY: 40 });
    //   // fixture.detectChanges();

    //   // console.log(debugElement.nativeElement.style);
    //   // expect(debugElement.nativeElement.style.backgroundColor).toBe('000');
    // });
  });
});
