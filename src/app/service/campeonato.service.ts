import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Campeonato } from 'src/app/models/campeonato';
import { Carrera } from 'src/app/models/carrera';

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

class responseRace {
  Name:string;
  Champ_Key:string;
  Country: string;
  Status: string;
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
export class CampeonatoService {

  // Remove
  private authToken:string='dkQhxuDOS02Z1jZJ2KRpng==';
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

  async getRaces(campeonatoId:string){
    const httpResponse:responseRace[] = await this.restService.get(
      'Race/getRacesChamp/'+campeonatoId+'/'+this.authToken+'/'+this.salt
    ).then(response=>{
      return response.json();
    });

    let response:Carrera[] = [];

    httpResponse.forEach((element:responseRace)=>{
      response.push({
        name:element.Name,
        startDate: element.Beginning_Date,
        startTime: element.Beginning_Time,
        endDate: element.Ending_Date,
        endTime: element.Ending_Time,
        country: element.Country,
        trackName: element.Track_Name,
      });
    })

    return response;
  }

  async getCurrentCampeonato(){
    const httpResponse:responseCampeonato = await this.restService.get(
      'Championship/getCurrentChampionship/'+this.authToken+'/'+this.salt
    ).then(response=>{
      return response.json();
    });

    const response:Campeonato = {
      id: httpResponse.Unique_Key,
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
