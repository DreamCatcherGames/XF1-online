import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { RestService } from './rest.service';


class EscuderiaRequest {
  Name:string;
  Country:string;
  Price:number;
  Photo:string;
}

@Injectable({
  providedIn: 'root'
})
export class EscuderiaService {

  constructor(
    private restService: RestService,
    private authService: AuthService,
    private errorService: ErrorService
  ) { }

  createNewEscuderia(newEscuderia:EscuderiaRequest) {

    console.log('Here')
    return this.restService.post('RacingTeams/addRacingTeam/'+this.authService.perfil.Token+'/'+this.authService.perfil.Salt, JSON.stringify(newEscuderia)).then(response => {
      if(response.status == 200 ){
        return response.text();
      }else{
        throw response;
      }
    }).catch(err=>{
      this.errorService.handle(err);
    });

  }

}
