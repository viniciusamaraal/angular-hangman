import { Component, OnInit } from '@angular/core';
import { LetterModel } from '../letter-box/letter.model';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {

  public alphabet: LetterModel[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 65; i <= 90; i++) {
      this.alphabet.push({ value: String.fromCharCode(i), display: true });
    }
  }
}
