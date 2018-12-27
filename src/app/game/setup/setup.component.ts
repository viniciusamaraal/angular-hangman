import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { DataService } from '../data.service';
import { GlobalEventsService } from '../global-events.service';
import { GameModeEnum } from '../game-mode.enum';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  public form: FormGroup;
  public canTypeWord = true;
  public gameStarted = false;
  public gameModeType = GameModeEnum;
  public playerTime: number;

  options = [
    {
        id: GameModeEnum.SINGLE_PLAYER,
        description: "Single Player"
    },
    {
        id: GameModeEnum.MULT_PLAYER,
        description: 'Mult player'
    }
  ];

  constructor(
    private formBuilder: FormBuilder, 
    private globalEventsService: GlobalEventsService,
    private dataService: DataService) { }

  ngOnInit() {
    this.playerTime = this.dataService.playerTimeToAsk;
    console.log(this.playerTime);
    this.dataService.getListOfWordsFromService();

    this.form = this.formBuilder.group({
      player1: [ '', Validators.required ],
      player2: [ '' ], 
      word: [ '' ],
      playersCount: new FormControl(GameModeEnum.SINGLE_PLAYER)
    });

    this.form.get('playersCount').valueChanges.subscribe(value => 
      this.setFormMultPlayer(value)
    );

    this.globalEventsService.eventGameOver$.subscribe(result => {
      this.restartGame();
    });
  }

  private setFormMultPlayer(value: string): void {
    const fldPlayer2 = this.form.get('player2');
    const fldWord = this.form.get('word');

    if (value == "mult_player") {
      fldPlayer2.setValidators(Validators.required);
      fldWord.setValidators(Validators.required);
    } else {
      fldPlayer2.setValue('');
      fldWord.setValue('');

      fldPlayer2.clearValidators();
      fldWord.clearValidators();
    }
    
    fldPlayer2.updateValueAndValidity();
    fldWord.updateValueAndValidity();
  }

  public startGame(): void {
    if (this.form.valid) {
      if (!this.gameStarted) {
        const playersCount = this.form.get('playersCount').value;
        const namePlayer1 = this.form.get('player1').value;
        let namePlayer2 = this.form.get('player2').value;
        namePlayer2 = namePlayer2 ? namePlayer2 : 'MACHINE';

        this.dataService.setupGame(namePlayer1.toUpperCase(), namePlayer2.toUpperCase(), playersCount);

        this.gameStarted = true;
      }

      if (this.dataService.gameMode == GameModeEnum.MULT_PLAYER) {
        const typedWord = this.form.get('word').value;
        this.dataService.setWordFromPlayer(typedWord, 'Multi player game doesn\'t need tips.');
        
      } else {
        this.dataService.setWordFromService();
      }

      this.globalEventsService.StartGame();
      this.canTypeWord = false;
    }
  }

  // restarts the game after ending a word
  private restartGame(): void {
    this.dataService.resetVariables();
    
    if (this.dataService.gameMode == GameModeEnum.MULT_PLAYER) {
      this.playerTime = this.dataService.playerTimeToAsk;
      this.canTypeWord = true;
      
      let word = this.form.get('word');
      word.setValue('');
      word.enable();
    }
    else {
      this.dataService.setWordFromService();
      this.globalEventsService.StartGame();
    }
  }

  // restarts the complete state of the game
  private resetGame(): void {
    window.location.reload();
  }

  private changeGameMode() {
    if (this.gameStarted) {
      return false;
    }
  }
}
