import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { DataService } from '../data.service';
import { GlobalEventsService } from '../global-events.service';
import { GameModeEnum } from '../game-mode.enum';
import { CategoryEnum } from 'src/app/core/word/category.enum';

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

  gameModeOptions = [
    {
        id: GameModeEnum.SINGLE_PLAYER,
        description: "Single Player"
    },
    {
        id: GameModeEnum.MULT_PLAYER,
        description: 'Mult player'
    }
  ];

  categoryOptions = [
    {
      id: CategoryEnum.ALL,
      description: "All"
    },
    {
      id: CategoryEnum.PEOPLE,
      description: "People"
    },
    {
      id: CategoryEnum.PLACES,
      description: "Places"
    },
    {
      id: CategoryEnum.TECHNOLOGY,
      description:  "Technology"
    },
    {
      id: CategoryEnum.THINGS,
      description: "Things"
    }
  ];

  constructor(
    private formBuilder: FormBuilder, 
    private globalEventsService: GlobalEventsService,
    private dataService: DataService) { }

  ngOnInit() {
    this.playerTime = this.dataService.playerTimeToAsk;
    
    this.form = this.formBuilder.group({
      player1: [ '', 
        Validators.compose([ 
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15), 
          Validators.pattern('[a-zA-Z ]*')
        ])],
      player2: [ '', ], 
      word: [ '' ],
      playersCount: [ GameModeEnum.SINGLE_PLAYER ],
      category: [ CategoryEnum.ALL ]
    });

    this.form.get('playersCount').valueChanges.subscribe(value => 
      this.setFormMultPlayer(value)
    );

    this.globalEventsService.eventGameOver$.subscribe(result => {
      this.restartGame();
    });
  }

  private setFormMultPlayer(value: string): void {
    const fldPlayer1 = this.form.get('player1');
    const fldPlayer2 = this.form.get('player2');
    const fldWord = this.form.get('word');

    if (value === String(GameModeEnum.MULT_PLAYER)) {
      fldPlayer1.setValidators(
        Validators.compose([ 
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15), 
          Validators.pattern('[a-zA-Z ]*'),
          this.compareToValidator(this.form.get('player2'))
        ]));

      fldPlayer2.setValidators(
        Validators.compose([ 
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
          this.compareToValidator(this.form.get('player1'))
        ]));
      fldWord.setValidators(
        Validators.compose([ 
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z ]*') 
        ]));
    } else {
      fldPlayer2.setValue('');
      fldWord.setValue('');

      fldPlayer1.clearValidators();
      fldPlayer1.setValidators(
        Validators.compose([ 
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15), 
          Validators.pattern('[a-zA-Z ]*')
        ]));

      fldPlayer2.clearValidators();
      fldWord.clearValidators();
    }
    
    fldPlayer1.updateValueAndValidity();
    fldPlayer2.updateValueAndValidity();
    fldWord.updateValueAndValidity();
  }

  public startGame(): void {
    if (this.form.valid) {
      if (!this.gameStarted) {
        const playersCount = this.form.get('playersCount');
        const category = this.form.get('category');
        const namePlayer1 = this.form.get('player1');
        const namePlayer2 = this.form.get('player2');
        let namePlayer2Value = namePlayer2.value ? namePlayer2.value : 'MACHINE';

        this.dataService.setupGame(namePlayer1.value.toUpperCase(), namePlayer2Value.toUpperCase(), playersCount.value, category.value);

        this.gameStarted = true;
      }
      
      if (this.dataService.gameMode == GameModeEnum.MULT_PLAYER) {
        const typedWord = this.form.get('word').value;
        this.dataService.setWordFromPlayer(typedWord, 'Multi player game doesn\'t need tips.');
        
      } else {
        this.dataService.setWordFromService();
      }

      this.canTypeWord = false;
    }
  }

  // restarts the game after ending a word
  private restartGame(): void {
    if (this.dataService.gameMode == GameModeEnum.MULT_PLAYER) {
      this.playerTime = this.dataService.playerTimeToAsk;
      this.canTypeWord = true;
      
      let word = this.form.get('word');
      word.setValue('');
      word.enable();
    }
    else {
      this.dataService.setWordFromService();
    }
  }

  // restarts the complete state of the game
  private resetGame(): void {
    window.location.reload();
  }

  private checkCanChangeRadios() {
    return !this.gameStarted;
  }

  compareToValidator(controlToCompare: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[ key: string]: boolean} | null => {
      if (control.value === controlToCompare.value) {
        return { "sameName": true };
      }

      return null;
    }
  }
}
