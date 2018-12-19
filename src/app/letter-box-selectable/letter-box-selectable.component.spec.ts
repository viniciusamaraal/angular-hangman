import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterBoxSelectableComponent } from './letter-box-selectable.component';

describe('LetterBoxSelectableComponent', () => {
  let component: LetterBoxSelectableComponent;
  let fixture: ComponentFixture<LetterBoxSelectableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterBoxSelectableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterBoxSelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
