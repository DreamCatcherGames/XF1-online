import { Component, OnInit, Input } from '@angular/core';
import { Carrera } from 'src/app/models/carrera';
import { Race } from 'src/app/models/race';
import { CarreraInfoService } from 'src/app/service/carrera-info.service';

@Component({
  selector: 'app-carrera-info',
  templateUrl: './carrera-info.component.html',
  styleUrls: ['./carrera-info.component.scss']
})
export class CarreraInfoComponent implements OnInit {

  @Input() carreraJson: string;
  carrera:Carrera;

  startDatetime:any;
  endDatetime:any;
  countryRace:any;
  nameRace:any;
  championshipRace:any;
  racetrack:any;
  race:Race;

  constructor(
    public carreraInfoService: CarreraInfoService,
  ) { }

  ngOnInit(): void {

    if(!this.carreraJson){
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

   /* this.carreraInfoService.infoRequest("s9WzL","GolloCumbia Race","Costa Rica").then( response => {
      console.log(response)
      this.race = response as Race
      this.startDatetime = this.race.Beginning_Date;
      this.endDatetime = this.race.Ending_Date;
      this.countryRace = this.race.Country
      this.nameRace = this.race.Name
      this.championshipRace = this.race.Champ_Key
      this.racetrack = this.race.Track_Name
  
    }).catch( error => {
      console.log(error)
    })*/
  }

  ngOnChanges(){
    console.log(this.carreraJson);
    this.carrera = JSON.parse(this.carreraJson) as Carrera;
  }

}
