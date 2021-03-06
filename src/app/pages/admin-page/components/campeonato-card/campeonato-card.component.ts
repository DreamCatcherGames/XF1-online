import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { Campeonato } from 'src/app/models/campeonato';

@Component({
  selector: 'app-campeonato-card',
  templateUrl: './campeonato-card.component.html',
  styleUrls: ['./campeonato-card.component.scss']
})
export class CampeonatoCardComponent implements OnInit {

  @Input() campeonatoJson:string='{}';

  campeonato:Campeonato;

  constructor() { }

  ngOnInit(): void {
    this.campeonato = this.campeonato?this.campeonato:{
      id:'',
      name:'',
      isCurrentChamp:false,
      rules:'',
      startDate: '', 
      endDate: '',
      startTime: '',
      endTime: '',
    }
  }

  ngOnChanges(){
    this.campeonato = JSON.parse(this.campeonatoJson);
  }

  getStartDateFormated(){
    return moment(this.campeonato.startDate).format('D MMM YYYY');
  }

  getEndDateFormated(){
    return moment(this.campeonato.endDate).format('D MMM YYYY');
  }

}
