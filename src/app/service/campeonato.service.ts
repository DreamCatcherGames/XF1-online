import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Campeonato } from 'src/app/models/campeonato';

// Server Classes
class serverCampeonato {
  Name:string;
  Rules_Description:string;
  Beginning_Date: string;
  Beginning_Time:string;
  Ending_Date:string;
  Ending_Time:string;
}


@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {


  // Remove
  private authToken:string;

  constructor(
    private restService:RestService,
  ) { }

  async createNewCampeonato(newCampeonato:Campeonato):Promise<void>{

    const requestCampeonatoObj: serverCampeonato = {
      Name: newCampeonato.name,
      Rules_Description: newCampeonato.rules,
      Beginning_Date: newCampeonato.startDate,
      Beginning_Time: newCampeonato.startTime,
      Ending_Time: newCampeonato.endTime,
      Ending_Date: newCampeonato.endDate
    };

    await this.restService.post(
      'Championship/addChampionship/'+this.authToken, 
      JSON.stringify(requestCampeonatoObj));

  }

}