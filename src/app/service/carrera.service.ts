import { Injectable } from '@angular/core';

import {Carrera} from 'src/app/models/carrera';
import { AuthService } from './auth.service';
import { RestService } from './rest.service';



class requestRace {
  Name:string;
  Champ_Key:string;
  Country: string;
  Status?: string;
  Qualification_Date:string;
  Competition_Date:string;
  Track_Name:string;
  Beginning_Date:string;
  Beginning_Time:string;
  Ending_Date:string;
  Ending_Time:string;
}

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(
    private restService:RestService,
    private authService:AuthService
  ) { }

  createNewCarrera(newCarrera:Carrera, champId:string){

    const requestCampeonatoObj: requestRace = {
      Name: newCarrera.name,
      Beginning_Date: newCarrera.startDate,
      Beginning_Time: newCarrera.startTime,
      Ending_Time: newCarrera.endTime,
      Ending_Date: newCarrera.endDate,
      Champ_Key: champId,
      Country: newCarrera.country,
      Qualification_Date: newCarrera.clasificatoriaDate,
      Competition_Date: newCarrera.competenciaDate,
      Track_Name: newCarrera.trackName
    };
    return this.restService.post(
      'Race/addRace/'+this.authService.perfil.Token+'/'+this.authService.perfil.Salt, 
      JSON.stringify(requestCampeonatoObj));
  } 

  async getCarrera(champId:string, pais:string, nombreCampeonato:string){
    const httpResponse:requestRace = await this.restService.get(
      'Championship/getChampionship/'+champId+'/'+ this.authService.perfil.Token+'/'+this.authService.perfil.Salt
    ).then(response=>{
      return response.json();
    });

    const response:Carrera = {
      name: httpResponse.Name,
      startDate: httpResponse.Beginning_Date,
      startTime: httpResponse.Beginning_Time,
      endDate: httpResponse.Ending_Date,
      endTime: httpResponse.Ending_Time,
      country: httpResponse.Country,
      trackName: httpResponse.Track_Name,
      championship: httpResponse.Champ_Key,
      clasificatoriaDate: httpResponse.Qualification_Date,
      competenciaDate: httpResponse.Competition_Date
    }

    return response;

  }




}
