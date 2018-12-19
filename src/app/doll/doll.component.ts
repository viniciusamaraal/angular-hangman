import { Component, OnInit } from '@angular/core';
import { GlobalEventsService } from '../global-events.service';
import { delay } from 'q';

@Component({
  selector: 'app-doll',
  templateUrl: './doll.component.html',
  styleUrls: ['./doll.component.css']
})
export class DollComponent implements OnInit {

  public imageId = 1;

  constructor(private globalEventsService: GlobalEventsService) { }

  ngOnInit() {
    this.globalEventsService.eventWrongLetterSelected$.subscribe(letter => {
        this.imageId++;

        if (this.imageId === 7) {
          this.globalEventsService.gameOver(false);
        }
    });
  }
}
