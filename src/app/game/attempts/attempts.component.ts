import { Component, OnInit, Input } from '@angular/core';
import { GlobalEventsService } from '../global-events.service';
import { LetterModel } from '../letter-box/letter.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  public failledAttempts: string[] = [];

  constructor(private globalEventsService: GlobalEventsService) { }

  ngOnInit() {
    this.globalEventsService.eventStartGame$.subscribe(()=>{
      this.resetFailledAttempts();
    });

    this.globalEventsService.eventWrongLetterSelected$.subscribe(letter => {
      this.insertNewFailledAttempt(letter);
    });
  }

  private resetFailledAttempts(): void {
    this.failledAttempts = [];
  }

  private insertNewFailledAttempt(letter: LetterModel): void {
    this.failledAttempts.push(letter.value);
  }
}
