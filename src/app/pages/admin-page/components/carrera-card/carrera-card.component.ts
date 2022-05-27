import { Component, OnInit, Input } from '@angular/core';

import { Carrera } from 'src/app/models/carrera';

import * as moment from 'moment';


@Component({
  selector: 'app-carrera-card',
  templateUrl: './carrera-card.component.html',
  styleUrls: ['./carrera-card.component.scss']
})
export class CarreraCardComponent implements OnInit {

  @Input() carreraJson:string='{}';

  carrera:Carrera;

  constructor() { }

  ngOnInit(): void {
    this.carrera = this.carrera? this.carrera: new Carrera();
  }

  ngOnChanges(): void {
    this.carrera = JSON.parse(this.carreraJson);
    console.log(this.carreraJson);
  }

  getCarreraName(){
    return this.carrera.name;
  }

  getStartDateFormated(){
    return moment(this.carrera.startDate).format('D MMM YYYY');
  }

  getEndDateFormated(){
    return moment(this.carrera.endDate).format('D MMM YYYY');
  }

}
