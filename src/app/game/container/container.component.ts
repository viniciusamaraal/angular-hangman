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

  constructor(private globalEventsService: GlobalEventsService, private dataService: DataService) {
  }

  loadWord(): void {
    var splitedWord = this.dataService.word.split('');
    splitedWord.forEach((element, index) => {
      this.word.push({ value: splitedWord[index], display: false });
    });
    this.tip = this.dataService.tip;
  }

  registerEvents() {
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
      
      console.log(letter.value);
      
      if (!letterFound) {
        this.globalEventsService.updateFailledAttempts(letter);
      } else {
        if (!anyHidden) {
          this.emitMessageGameOver(true);
        }
      }
    });

    this.globalEventsService.eventStartGame$.subscribe(()=>{
      this.loadWord();
    });

    this.globalEventsService.eventGameOver$.subscribe(result => {
      this.emitMessageGameOver(result);
    });
  }

  ngOnInit(): void {
    this.registerEvents();
  }

  emitMessageGameOver(result: boolean) {
    const message = result ? 'Congratulations, you win! \\o/' : 'Game over! Try again...';
    alert(message);
    window.location.reload();
  }
}
