import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campeonato-info',
  templateUrl: './campeonato-info.component.html',
  styleUrls: ['./campeonato-info.component.scss']
})
export class CampeonatoInfoComponent implements OnInit {

  startDatetime:any;
  endDatetime:any;

  constructor() { }

  ngOnInit(): void {
  }

}
