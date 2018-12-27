import { Component, OnInit } from '@angular/core';
import { LetterModel } from '../letter-box/letter.model';
import { GlobalEventsService } from '../global-events.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  title = 'hangman';

  public word: LetterModel[] = [];
  public tip: string;
  public gameStartedAtLeastOnce: boolean;

  constructor(private globalEventsService: GlobalEventsService, private dataService: DataService) {
    
  }

  ngOnInit() {
    this.globalEventsService.eventLetterSeleciton$.subscribe(letter => {
      this.checkSelectedLetter(letter);
    });

    this.globalEventsService.eventStartGame$.subscribe(()=>{
      this.gameStartedAtLeastOnce = true;
      this.loadWord();
    });

    this.globalEventsService.eventGameOver$.subscribe(()=>{
      this.clear();
    });
  }

  private loadWord(): void {
    this.word = [];
  
    var splitedWord = this.dataService.word.split('');
    splitedWord.forEach((element, index) => {
      this.word.push({ value: splitedWord[index], display: false });
    });
    this.tip = this.dataService.tip;
  }

  private checkSelectedLetter(letter: LetterModel): void {
    let letterFound = false;

    this.word.forEach((element, index) => {
      if (this.word[index].value === letter.value) {
        this.word[index].display = true;
        this.dataService.currentWordHits++;
        letterFound = true;
      }
    });
    
    if (!letterFound) {
      this.dataService.currentGameErrorsCount++;
      this.globalEventsService.updateFailledAttempts(letter);
    } 

    this.dataService.checkGameOver();
  }

  private clear(): void {
    this.word = [];
    this.tip = '';
  }
}
