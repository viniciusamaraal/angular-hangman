import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  @Input() tip: string;

  constructor() { }

  ngOnInit() {
  }

}
