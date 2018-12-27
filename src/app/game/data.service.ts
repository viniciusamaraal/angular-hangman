import { Injectable } from '@angular/core';
import { WordsService } from './word.service';
import { Word } from './word.model';
import { GameModeEnum } from './game-mode.enum';
import { GlobalEventsService } from './global-events.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public listOfWords: Word[];
  public word: string;
  public tip: string;

  public namePlayer1: string;
  public namePlayer2: string;
  public scorePlayer1: number;
  public scorePlayer2: number;

  public gameMode: GameModeEnum;
  public currentGameErrorsCount: number;
  public currentWordHits: number;
  public gameCount: number = 0;
  public playerTimeToAsk: number = 0;
  
  constructor(private globalEventsService: GlobalEventsService, private wordsService: WordsService) { 
    this.resetVariables();
  }

  public getListOfWordsFromService(): void {
    this.wordsService.words()
      .subscribe(retreviedWords => {
          this.listOfWords = retreviedWords;
        }
      );
  }

  public setupGame(name1: string, name2: string, gameMode: GameModeEnum): void {
    this.namePlayer1 = name1;
    this.namePlayer2 = name2;
    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;
    this.currentGameErrorsCount = 0;
    this.currentWordHits = 0;

    this.gameMode = gameMode;
  }

  public setWordFromService(): void {
    const sortedIndex = Math.floor(Math.random() * this.listOfWords.length);
    this.word = this.listOfWords[sortedIndex].word.toUpperCase();
    this.tip = this.listOfWords[sortedIndex].tip;
  }

  public setWordFromPlayer(typedWord: string, typedTip: string): void {
    this.word = typedWord.toUpperCase();
    this.tip = typedTip;
  }

  public checkGameOver(): void {
    const endLoser = this.currentGameErrorsCount === 6;
    const endWinner = this.currentWordHits == this.word.length;

    if (endLoser || endWinner) {
      this.globalEventsService.gameOver(endLoser ? false : true);
    }
  }

  public resetVariables(): void {
    this.currentGameErrorsCount = 0;
    this.currentWordHits = 0;
    this.gameCount++;
    this.playerTimeToAsk++;

    this.word = this.tip = '';
  }

  public checkPlayer1TimeToAsk(): boolean {
    return this.playerTimeToAsk % 2 != 0;
  }
}
