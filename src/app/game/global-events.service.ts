import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { LetterModel } from './letter-box/letter.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventsService {

  private _eventLetterSeleciton = new ReplaySubject<any>(1);
  private _eventWrongLetterSelected = new ReplaySubject<any>(1);
  private _eventGameOver = new ReplaySubject<any>(1);

  public eventLetterSeleciton$ = this._eventLetterSeleciton.asObservable();
  public eventWrongLetterSelected$ = this._eventWrongLetterSelected.asObservable();
  public eventGameOver$ = this._eventGameOver.asObservable();

  verifyLetter(letter: LetterModel) {
    this._eventLetterSeleciton.next(letter);
  }

  updateFailledAttempts(letter: LetterModel) {
    this._eventWrongLetterSelected.next(letter);
  }

  gameOver(result: boolean) {
    this._eventGameOver.next(result);
  }
}
