import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SetupComponent } from './setup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GlobalEventsService } from '../global-events.service';
import { DataService } from '../data.service';
import { MockedDataService } from 'src/testing/data-testing.service';
import { RadioComponent } from 'src/app/shared/radio/radio.component';



describe('SetupComponent', () => {
  describe('Component Tests', () => {
    let component: SetupComponent;
    let fixture: ComponentFixture<SetupComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ ReactiveFormsModule ],
        declarations: [ SetupComponent, RadioComponent ],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
        providers: [
          GlobalEventsService,
          { provide: DataService, useClass: MockedDataService }
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(SetupComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});