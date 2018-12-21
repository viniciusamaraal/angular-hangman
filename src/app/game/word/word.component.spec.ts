import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WordComponent } from './word.component';

describe('LetterBoxSelectableComponent', () => {
    let ts: WordComponent;
    let fixture: ComponentFixture<WordComponent>;
  
    describe('Unit Tests', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [WordComponent],
          schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
      }));
  
      beforeEach(() => {
        fixture = TestBed.createComponent(WordComponent);
        ts = fixture.componentInstance;
  
        ts.word = [ 
            { value: 'L', display: true },
            { value: 'I', display: true },
            { value: 'N', display: true },
            { value: 'U', display: true },
            { value: 'X', display: true }
        ];
  
        fixture.detectChanges();
      });
  
      it('should create', () => {
        expect(ts).toBeTruthy();
      });
    });
  
    describe('Component Tests', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [WordComponent],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
      }));
  
      beforeEach(() => {
        fixture = TestBed.createComponent(WordComponent);
        ts = fixture.componentInstance;
      });
  
      it('should display one box for each letter', () => {
        ts.word = [ 
            { value: 'L', display: true },
            { value: 'I', display: true },
            { value: 'N', display: true },
            { value: 'U', display: true },
            { value: 'X', display: true }
        ];

        fixture.detectChanges();

        const childsCount = fixture.debugElement.queryAll(By.css(".letter-word")).length;
        
        expect(childsCount).toEqual(5);
      });
    });
  });