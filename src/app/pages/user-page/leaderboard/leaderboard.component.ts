import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  points: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', points: 1.0079},
  {position: 2, name: 'Helium', points: 4.0026},
  {position: 3, name: 'Lithium', points: 6.941},
  {position: 4, name: 'Beryllium', points: 9.0122},
  {position: 5, name: 'Boron', points: 10.811},
  {position: 6, name: 'Carbon', points: 12.0107},
  {position: 7, name: 'Nitrogen', points: 14.0067},
  {position: 8, name: 'Oxygen', points: 15.9994},
  {position: 9, name: 'Fluorine', points: 18.9984},
  {position: 10, name: 'Neon', points: 20.1797},
];

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})

export class LeaderboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
