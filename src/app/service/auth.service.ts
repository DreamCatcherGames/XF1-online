import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { PerfilUsuario } from '../models/perfilUsuario';
import { RestService } from './rest.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public perfil : Perfil
  public perfilUsuario: PerfilUsuario;

  constructor(
    private restService: RestService,
  ) { }

  loginRequest(dataToSend):Promise<any>{
    return this.restService.post("Admin/loginRequest",JSON.stringify(dataToSend)).then( response => {

      if(response.status == 200)
      {
        return response.json()
      }else{
        return response.text().then(text=>{throw new Error(text)});
      }
    })
  }

  loginRequestUser(dataToSend):Promise<any>{
    return this.restService.post("Player/loginRequest",JSON.stringify(dataToSend)).then( response => {
      if(response.status == 200)
      {
        return response.json()
      }else{
        return response.text().then(text=>{throw new Error(text)});
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
