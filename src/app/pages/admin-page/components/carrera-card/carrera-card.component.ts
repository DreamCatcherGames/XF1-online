import { Component, OnInit, Input } from '@angular/core';

import { Carrera } from 'src/app/models/carrera';

import * as moment from 'moment';


@Component({
  selector: 'app-carrera-card',
  templateUrl: './carrera-card.component.html',
  styleUrls: ['./carrera-card.component.scss']
})
export class CarreraCardComponent implements OnInit {

  @Input() carreraJson:string;

  carrera:Carrera;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.carrera = JSON.parse(this.carreraJson);
  }

  getStartDateFormated(){
    return moment(this.carrera.startDate).format('D MMM YYYY');
  }

  getEndDateFormated(){
    return moment(this.carrera.endDate).format('D MMM YYYY');
  }

}
