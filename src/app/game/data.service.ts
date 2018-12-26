import { Injectable } from '@angular/core';
import { WordsService } from './word.service';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public listOfWords: Word[];
  public word: string;
  public tip: string;
  
  constructor(private wordsService: WordsService) { }

  getListOfWordsFromService(): void {
    this.wordsService.words()
      .subscribe(retreviedWords => {
          this.listOfWords = retreviedWords;
        }
      );
  }

  setWordFromService(): void {
    const sortedIndex = Math.floor(Math.random() * this.listOfWords.length);
    this.word = this.listOfWords[sortedIndex].word.toUpperCase();
    this.tip = this.listOfWords[sortedIndex].tip;
  }

  setWordFromPlayer(typedWord: string, typedTip: string) {
    this.word = typedWord.toUpperCase();
    this.tip = typedTip;
  }
}
