import { Component, OnInit, Input } from '@angular/core';

import {Campeonato} from 'src/app/models/campeonato';

@Component({
  selector: 'app-campeonato-info',
  templateUrl: './campeonato-info.component.html',
  styleUrls: ['./campeonato-info.component.scss']
})
export class CampeonatoInfoComponent implements OnInit {

  startDatetime:any;
  endDatetime:any;

  @Input() inputCampeonatoJson:string;

  campeonato:Campeonato;

  constructor() { }

  ngOnInit(): void {
    this.campeonato = JSON.parse(this.inputCampeonatoJson);
  }

  ngOnChanges(){
    this.campeonato = JSON.parse(this.inputCampeonatoJson);    
  }

}
