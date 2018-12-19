import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterBoxComponent } from './letter-box.component';

describe('LetterBoxComponent', () => {
  let component: LetterBoxComponent;
  let fixture: ComponentFixture<LetterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
