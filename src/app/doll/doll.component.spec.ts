import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollComponent } from './doll.component';

describe('DollComponent', () => {
  let component: DollComponent;
  let fixture: ComponentFixture<DollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
