import { Component, OnInit } from '@angular/core';
import { Word } from '../word.model';
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

  public listOfWords: Word[] = [];
  public word: LetterModel[] = [];
  public tip: string;

  constructor(private globalEventsService: GlobalEventsService, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.words()
      .subscribe(words => {
          this.listOfWords = words;
          const sortedIndex = Math.floor(Math.random() * this.listOfWords.length);
          const selectedWord = this.listOfWords[sortedIndex];
          const selectedWordSplitted = selectedWord.word.split('');

          this.tip = selectedWord.tip;
          selectedWordSplitted.forEach((element, index) => {
            this.word.push({ value: selectedWordSplitted[index], display: false });
          });
        }
      );

    this.globalEventsService.eventLetterSeleciton$.subscribe(letter => {
      let letterFound = false;
      let anyHidden = false;

      this.word.forEach((element, index) => {
        if (this.word[index].value === letter.value) {
          this.word[index].display = true;
          letterFound = true;
        }

        if (!this.word[index].display) {
          anyHidden = true;
        }
      });

      if (!letterFound) {
        this.globalEventsService.updateFailledAttempts(letter);
      } else {
        if (!anyHidden) {
          this.emitMessageGameOver(true);
        }
      }
    });

    this.globalEventsService.eventGameOver$.subscribe(result => {
      this.emitMessageGameOver(result);
    });
  }

  emitMessageGameOver(result: boolean) {
    const message = result ? 'Congratulations, you win! \\o/' : 'Game over! Try again...';
        alert(message);
        window.location.reload();
  }
}
