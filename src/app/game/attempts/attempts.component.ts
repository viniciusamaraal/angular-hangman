import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GlobalEventsService } from '../global-events.service';
import { LetterModel } from '../letter-box/letter.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnDestroy {

  public failledAttempts: string[] = [];

  private eventGameStartSubscription: Subscription;
  private eventWrongLetterSelectedSubscription: Subscription;

  constructor(private globalEventsService: GlobalEventsService) { }

  ngOnInit() {
    this.resetFailledAttempts();

    this.eventWrongLetterSelectedSubscription = this.globalEventsService.eventWrongLetterSelected$.subscribe(letter => {
      this.insertNewFailledAttempt(letter);
    });
  }

  ngOnDestroy(): void {
    this.eventGameStartSubscription.unsubscribe();
    this.eventWrongLetterSelectedSubscription.unsubscribe();
  }

  private resetFailledAttempts(): void {
    this.failledAttempts = [];
  }

  private insertNewFailledAttempt(letter: LetterModel): void {
    this.failledAttempts.push(letter.value);
  }
}
