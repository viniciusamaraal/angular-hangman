import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { LetterModel } from './letter-box/letter.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventsService {
  
  private _eventLetterSelection = new Subject<any>();
  private _eventWrongLetterSelected = new Subject<any>();
  private _eventStartGame = new Subject<any>();
  private _eventGameOver = new Subject<any>();

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

  startGame() {
    this._eventStartGame.next();
  }

  gameOver(result: boolean) {
    this._eventGameOver.next(result);
  }
}
