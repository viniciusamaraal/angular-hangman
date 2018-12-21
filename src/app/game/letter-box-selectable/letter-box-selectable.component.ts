import { Component, OnInit, Input } from '@angular/core';
import { LetterModel } from '../letter-box/letter.model';
import { GlobalEventsService } from '../global-events.service';

@Component({
  selector: 'app-letter-box-selectable',
  templateUrl: './letter-box-selectable.component.html',
  styleUrls: ['./letter-box-selectable.component.css']
})
export class LetterBoxSelectableComponent implements OnInit {

  @Input() letter: LetterModel;

  constructor(private globalEventsService: GlobalEventsService) { }

  ngOnInit() {

  }

  emitSelectLetter(letter: LetterModel) {
    letter.display = false;
    this.globalEventsService.verifyLetter(letter);
  }
}
