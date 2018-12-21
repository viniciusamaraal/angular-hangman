import { Component, OnInit, Input } from '@angular/core';
import { LetterModel } from '../letter-box/letter.model';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  @Input() word: LetterModel[];

  constructor() { }

  ngOnInit() {
  }
}
