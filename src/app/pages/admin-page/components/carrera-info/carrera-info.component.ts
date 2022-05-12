import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race';
import { CarreraInfoService } from 'src/app/service/carrera-info.service';

@Component({
  selector: 'app-carrera-info',
  templateUrl: './carrera-info.component.html',
  styleUrls: ['./carrera-info.component.scss']
})
export class CarreraInfoComponent implements OnInit {
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
    this.carreraInfoService.infoRequest("s9WzL","GolloCumbia Race","Costa Rica").then( response => {
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
    })
  }

}
