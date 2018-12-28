import { Component, OnInit, OnDestroy } from '@angular/core';
import { LetterModel } from '../letter-box/letter.model';
import { GlobalEventsService } from '../global-events.service';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
    
  title = 'hangman';

  public word: LetterModel[] = [];
  public tip: string;
  public gameStartedAtLeastOnce: boolean;

  private eventLetterSelecitonSubscription: Subscription;
  private eventLoadWordSubscription: Subscription;
  private eventGameOverSubscription: Subscription;

  constructor(private globalEventsService: GlobalEventsService, private dataService: DataService) {
    
  }

  ngOnInit() {
    console.log('container created...');
    this.eventLetterSelecitonSubscription = this.globalEventsService.eventLetterSeleciton$.subscribe(letter => {
      this.checkSelectedLetter(letter);
    });

    this.eventLoadWordSubscription = this.globalEventsService.eventStartGame$.subscribe(()=>{
      this.gameStartedAtLeastOnce = true;
      this.loadWord();
    });

    this.eventGameOverSubscription = this.globalEventsService.eventGameOver$.subscribe(()=>{
      this.clear();
    });
  }

  ngOnDestroy(): void {
    this.eventLetterSelecitonSubscription.unsubscribe();
    this.eventLoadWordSubscription.unsubscribe();
    this.eventGameOverSubscription.unsubscribe();
  }

  private loadWord(): void {
    this.word = [];
    
    var splitedWord = this.dataService.word.split('');
    splitedWord.forEach((element, index) => {
      this.word.push({ value: splitedWord[index], display:  false });
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
    } 
    
    const gameIsOver = this.dataService.checkGameOver(); 
    if (!gameIsOver && !letterFound) {
      this.globalEventsService.updateFailledAttempts(letter);
    }
  }

  private clear(): void {
    this.word = [];
    this.tip = '';
  }
}
