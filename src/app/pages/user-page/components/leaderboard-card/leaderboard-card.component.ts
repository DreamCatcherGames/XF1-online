import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leaderboard-card',
  templateUrl: './leaderboard-card.component.html',
  styleUrls: ['./leaderboard-card.component.scss']
})
export class LeaderboardCardComponent implements OnInit {

  @Input() hasLeaderboard :boolean;
  @Input() leagueTitle:string;
  @Input() place:string;
  @Input() numUsers:string;

  @Output() openCreate = new EventEmitter();
  @Output() openJoin = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickCreate(){
    this.openCreate.emit();
  }

  onClickJoin(){
    this.openJoin.emit();
  }

}
