import { Component, OnInit, Input } from '@angular/core';
import { LetterModel } from './letter.model';

@Component({
  selector: 'app-letter-box',
  templateUrl: './letter-box.component.html',
  styleUrls: ['./letter-box.component.css']
})
export class LetterBoxComponent implements OnInit {

  @Input() letter: LetterModel;
  public isWhitespace: boolean;

  constructor() { }

  ngOnInit() {
    this.isWhitespace = this.letter.value === ' ';
    console.log(this.isWhitespace);
  }
}
