import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { RestService } from './rest.service';


class RequestPiloto {

}

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  constructor(
    private restService: RestService,
    private authService: AuthService,
    private errorService: ErrorService
  ) { }

  createNewPiloto(newPiloto:RequestPiloto){
    return this.restService.post('Pilots/getAllPilots/'+this.authService.perfil.Token
                    +'/'+this.authService.perfil.Salt, JSON.stringify(newPiloto)).then(res=>{
      if(res.status == 200){
        return res.text();
      }else{
        throw res;
      }
    }).catch(err=>{
      this.errorService.handle(err);
    });
  }
}
