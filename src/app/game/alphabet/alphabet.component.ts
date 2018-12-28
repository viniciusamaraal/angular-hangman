import { Component, OnInit, OnDestroy } from '@angular/core';
import { LetterModel } from '../letter-box/letter.model';
import { GlobalEventsService } from '../global-events.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit, OnDestroy {
  
  public alphabet: LetterModel[] = [];

  private eventStartGameSubscription: Subscription;

  constructor(private globalEventsService: GlobalEventsService) { }

  ngOnInit() {
    this.loadAlphabet();
  }

  ngOnDestroy(): void {
    this.eventStartGameSubscription.unsubscribe();
  }

  private loadAlphabet(): void {
    this.alphabet = [];
    for (let i = 65; i <= 90; i++) {
      this.alphabet.push({ value: String.fromCharCode(i), display: true });
    }
  }
}
