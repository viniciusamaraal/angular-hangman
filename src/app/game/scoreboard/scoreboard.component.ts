import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalEventsService } from '../global-events.service';
import { DataService } from '../data.service';
import { GameModeEnum } from '../game-mode.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  
  private namePlayer1: string;
  private scorePlayer1: number;
  private namePlayer2: string;
  private scorePlayer2: number;

  private eventGameOverSubscription: Subscription;
  
  constructor(private globalEventsService: GlobalEventsService, private dataService: DataService) { }

  ngOnInit() {
    this.namePlayer1 = this.dataService.namePlayer1;
    this.scorePlayer1 = this.dataService.scorePlayer1;
    this.namePlayer2 = this.dataService.namePlayer2;
    this.scorePlayer2 = this.dataService.scorePlayer2;

    this.eventGameOverSubscription = this.globalEventsService.eventGameOver$.subscribe(result => {
      this.updateScoreBoard(result);
    });
  }

  ngOnDestroy(): void {
    this.eventGameOverSubscription.unsubscribe();
  }

  updateScoreBoard(discovered: boolean) {
    if (this.dataService.gameMode == GameModeEnum.MULT_PLAYER) {
      if (discovered) {
        if (this.dataService.checkPlayer1TimeToAsk()) {
          this.scorePlayer2 = this.dataService.scorePlayer2 = this.dataService.scorePlayer2 + 1;
        } else {
          this.scorePlayer1 = this.dataService.scorePlayer1 = this.dataService.scorePlayer1 + 1;
        }
      } else {
        if (this.dataService.checkPlayer1TimeToAsk()) {
          this.scorePlayer1 = this.dataService.scorePlayer1 = this.dataService.scorePlayer1 + 1;
        } else {
          this.scorePlayer2 = this.dataService.scorePlayer2 = this.dataService.scorePlayer2 + 1;
        }
      }
    }
    else {
      if (discovered) {
        this.scorePlayer1 = this.dataService.scorePlayer1 = this.dataService.scorePlayer1 + 1;
      } else {
        this.scorePlayer2 = this.dataService.scorePlayer2 = this.dataService.scorePlayer2 + 1;
      }
    }
  }
}
