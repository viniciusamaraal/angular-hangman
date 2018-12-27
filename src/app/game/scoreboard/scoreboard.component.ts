import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  private player1Name: string;
  private player1Points: string;
  private player2Name: string;
  private player2Points: string;
  
  constructor() { }

  ngOnInit() {
    this.player1Name = "Vinicius";
    this.player2Name = "Machine";
    this.player1Points = "2";
    this.player2Points = "0";
  }

}
