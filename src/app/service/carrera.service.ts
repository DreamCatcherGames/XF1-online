import { Injectable } from '@angular/core';

import {Carrera} from 'src/app/models/carrera';
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

  // Remove
  private authToken:string='dkQhxuDOS02Z1jZJ2KRpng==';
  private salt:string='YGXMKyXDIemAKw==';

  constructor(
    private restService:RestService
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
      'Race/addRace/'+this.authToken+'/'+this.salt, 
      JSON.stringify(requestCampeonatoObj));

  }

}
