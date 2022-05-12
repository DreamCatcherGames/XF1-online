import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Campeonato } from 'src/app/models/campeonato';

// Server Classes
class requestCampeonato {
  Name:string;
  Rules_Description:string;
  Beginning_Date: string;
  Beginning_Time:string;
  Ending_Date:string;
  Ending_Time:string;
}

class responseCampeonato {
  Unique_Key:string;
  Name:string;
  Rules_Description:string;
  Beginning_Date:string;
  Beginning_Time:string;
  Ending_Date:string;
  Ending_Time:string;
  Public_League_Name:string;
  CurrentChamp: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  // Remove
  private authToken:string='xRw7SZeEzUyCoYrf3XXaA==';
  private salt:string='YGXMKyXDIemAKw==';

  constructor(
    private restService:RestService,
  ) { }

  createNewCampeonato(newCampeonato:Campeonato):Promise<Response>{

    const requestCampeonatoObj: requestCampeonato = {
      Name: newCampeonato.name,
      Rules_Description: newCampeonato.rules,
      Beginning_Date: newCampeonato.startDate,
      Beginning_Time: newCampeonato.startTime,
      Ending_Time: newCampeonato.endTime,
      Ending_Date: newCampeonato.endDate
    };

    return this.restService.post(
      'Championship/addChampionship/'+this.authToken+'/'+this.salt, 
      JSON.stringify(requestCampeonatoObj));

  }

  async getCurrentCampeonato(){
    const httpResponse:responseCampeonato = await this.restService.get(
      'Championship/getCurrentChampionship/'+this.authToken+'/'+this.salt
    ).then(response=>{
      return response.json();
    });

    const response:Campeonato = {
      name: httpResponse.Name,
      isCurrentChamp: httpResponse.CurrentChamp,
      rules: httpResponse.Rules_Description,
      startDate: httpResponse.Beginning_Date,
      startTime: httpResponse.Beginning_Time,
      endDate: httpResponse.Ending_Date,
      endTime: httpResponse.Ending_Time
    }

    return response;

  }

}
