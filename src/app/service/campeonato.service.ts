import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Campeonato } from 'src/app/models/campeonato';
import { Carrera } from 'src/app/models/carrera';
import { AuthService } from './auth.service';

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
    private authService: AuthService,
  ) { }

  async getAllButCurrent():Promise<Campeonato[]> {

    const httpResponse:responseCampeonato[] = await this.restService.get(
      'Championship/getNotCurrentChampionship/'+'/'+this.authService.perfil.Token+'/'+this.authService.perfil.Salt
    ).then(response=>{
      return response.json();
    });


    let response:Campeonato[] = [];

    httpResponse.forEach((element:responseCampeonato)=>{
      response.push({
        name:element.Name,
        startDate: element.Beginning_Date,
        startTime: element.Beginning_Time,
        endDate: element.Ending_Date,
        endTime: element.Ending_Time,
        rules: element.Rules_Description,
        id: element.Unique_Key
      });
    })

    return response;

  }

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
      'Championship/addChampionship/'+this.authService.perfil.Token+'/'+this.authService.perfil.Salt, 
      JSON.stringify(requestCampeonatoObj));

  }

  async getRaces(campeonatoId:string){
    const httpResponse:responseRace[] = await this.restService.get(
      'Race/getRacesChamp/'+campeonatoId+'/'+this.authService.perfil.Token+'/'+this.authService.perfil.Salt
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
        clasificatoriaDate: element.Qualification_Date,
        competenciaDate: element.Competition_Date
      });
    })

    return response;
  }

  async getCurrentCampeonato(){
    const httpResponse:responseCampeonato = await this.restService.get(
      'Championship/getCurrentChampionship/'+this.authService.perfil.Token+'/'+this.authService.perfil.Salt
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

  async getCampeonato(champId:string):Promise<Campeonato>{

    const httpResponse:responseCampeonato = await this.restService.get(
      'Championship/getChampionship/'+champId+'/'+ this.authService.perfil.Token+'/'+this.authService.perfil.Salt
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
