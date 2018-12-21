import { Component, OnInit } from '@angular/core';
import { GlobalEventsService } from '../global-events.service';
import { delay } from 'q';

@Component({
  selector: 'app-doll',
  templateUrl: './doll.component.html',
  styleUrls: ['./doll.component.css']
})
export class DollComponent implements OnInit {

  public imageId: number;

  constructor(private globalEventsService: GlobalEventsService) {
    this.imageId = 1; 
  }

  ngOnInit() {
    this.globalEventsService.eventWrongLetterSelected$.subscribe(letter => {
        this.imageId++;

        if (this.checkLastImage()) {
          this.globalEventsService.gameOver(false);
        }
    });
  }

  checkLastImage(): boolean {
    return this.imageId === 7;
  }
}
