import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
