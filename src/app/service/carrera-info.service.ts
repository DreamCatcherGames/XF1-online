import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CarreraInfoService {

  constructor(
    private restService: RestService,
    private authService: AuthService,
  ) { }

  infoRequest(id, name,country):Promise<any>{
    return this.restService.get("Race/getRaceId/" + id +"/"+ name+ "/"+country+"/"+this.authService.perfil.Token+"/"+this.authService.perfil.Salt).then( response => {

      if(response.status == 200)
      {
        return response.json()
      }else{
        throw response
      }
    })
  }
}
