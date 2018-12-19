import { Component, OnInit, Input } from '@angular/core';
import { GlobalEventsService } from '../global-events.service';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  public failledAttempts: string[] = [];

  constructor(private globalEventsService: GlobalEventsService) { }

  ngOnInit() {
    this.globalEventsService.eventWrongLetterSelected$.subscribe(letter => {
      this.failledAttempts.push(letter.value);
    });
  }
}
