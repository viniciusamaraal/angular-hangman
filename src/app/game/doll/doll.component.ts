import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalEventsService } from '../global-events.service';
import { delay } from 'q';
import { Subscription, VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-doll',
  templateUrl: './doll.component.html',
  styleUrls: ['./doll.component.css']
})
export class DollComponent implements OnInit, OnDestroy {
  
  public imageId: number;

  private eventWrongLetterSelectedSubscription: Subscription;

  constructor(private globalEventsService: GlobalEventsService) {
  }

  ngOnInit() {
    this.imageId = 1;
    
    this.eventWrongLetterSelectedSubscription = this.globalEventsService.eventWrongLetterSelected$.subscribe(letter => {
      this.imageId++;
    });
  }

  ngOnDestroy(): void {
    this.eventWrongLetterSelectedSubscription.unsubscribe();
  }
}