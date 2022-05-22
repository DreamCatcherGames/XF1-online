import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { RestService } from './rest.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public perfil : Perfil

  constructor(
    private restService: RestService,
  ) { }

  loginRequest(dataToSend):Promise<any>{
    return this.restService.post("Admin/loginRequest",JSON.stringify(dataToSend)).then( response => {

      if(response.status == 200)
      {
        return response.json()
      }else{
        throw response
      }
    })
  }

  setPerfil(perfil : Perfil){
    this.perfil = perfil;
  }

  getPerfil(perfil:Perfil){
    return perfil;
  }

}
