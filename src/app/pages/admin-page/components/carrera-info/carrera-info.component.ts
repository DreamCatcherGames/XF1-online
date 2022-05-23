import { Component, OnInit, Input } from '@angular/core';
import { Carrera } from 'src/app/models/carrera';
import { Race } from 'src/app/models/race';

@Component({
  selector: 'app-carrera-info',
  templateUrl: './carrera-info.component.html',
  styleUrls: ['./carrera-info.component.scss']
})
export class CarreraInfoComponent implements OnInit {

  @Input() carreraJson: string='{}';
  carrera:Carrera;

  startDatetime:any;
  endDatetime:any;
  countryRace:any;
  nameRace:any;
  championshipRace:any;
  racetrack:any;
  race:Race;

  constructor(
  ) { }

  ngOnInit(): void {

    
    this.carrera={
      name:'', 
      startDate:'',
      startTime:'',
      endDate:'',
      endTime:'',
      country:'',
      trackName:'',
      clasificatoriaDate:'',
      competenciaDate:'',
    }

  }

  ngOnChanges(){
    console.log(this.carreraJson);
    this.carrera = JSON.parse(this.carreraJson) as Carrera;
  }

}
