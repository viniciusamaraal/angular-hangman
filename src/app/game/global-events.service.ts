import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { LetterModel } from './letter-box/letter.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventsService {

  private _eventLetterSelection = new ReplaySubject<any>(1);
  private _eventWrongLetterSelected = new ReplaySubject<any>(1);
  private _eventStartGame = new ReplaySubject<any>(1);
  private _eventGameOver = new ReplaySubject<any>(1);

  public eventLetterSeleciton$ = this._eventLetterSelection.asObservable();
  public eventWrongLetterSelected$ = this._eventWrongLetterSelected.asObservable();
  public eventStartGame$ = this._eventStartGame.asObservable();
  public eventGameOver$ = this._eventGameOver.asObservable();

  verifyLetter(letter: LetterModel) {
    this._eventLetterSelection.next(letter);
  }

  updateFailledAttempts(letter: LetterModel) {
    this._eventWrongLetterSelected.next(letter);
  }

  StartGame() {
    this._eventStartGame.next();
  }

  gameOver(result: boolean) {
    this._eventGameOver.next(result);
  }
}
