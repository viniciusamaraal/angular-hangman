import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { DataService } from '../data.service';
import { GlobalEventsService } from '../global-events.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  public form: FormGroup;
  public canStart = true;

  options = [
    {
        id: "single_player",
        description: 'Single Player'
    },
    {
        id: "mult_player",
        description: 'Mult player'
    }
  ];

  constructor(
    private formBuilder: FormBuilder, 
    private globalEvents: GlobalEventsService,
    private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getListOfWordsFromService();

    this.form = this.formBuilder.group({
      player1: [ '', Validators.required ],
      player2: [ '' ], 
      word: [ '' ],
      playersCount: new FormControl('single_player')
    });

    this.form.get('playersCount').valueChanges.subscribe(value => this.setFormMultPlayer(value));
  }

  setFormMultPlayer(value: string) {
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

  submit() {
    if (this.form.valid) {
      const multPlayer = this.form.get('playersCount').value === "mult_player";

      if (multPlayer) {
        const typedWord = this.form.get('word').value;
        this.dataService.setWordFromPlayer(typedWord, 'Single player game does not have tips.');
      } else {
        this.dataService.setWordFromService();
      }

      this.globalEvents.StartGame();
      this.form.get('playersCount').disable();
      this.canStart = false;
    }
  }
}