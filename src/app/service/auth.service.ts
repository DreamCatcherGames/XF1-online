import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { PerfilUsuario } from '../models/perfilUsuario';
import { RestService } from './rest.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public perfil : Perfil;
  public perfilUsuario : PerfilUsuario;

  constructor(
    private restService: RestService,
  ) { }

  loginRequest(dataToSend):Promise<any>{
    return this.restService.post("Admin/loginRequest",JSON.stringify(dataToSend));
  }

  loginRequestUser(dataToSend):Promise<any>{
    return this.restService.post("Player/loginRequest",JSON.stringify(dataToSend));
  }

  setPerfil(perf : Perfil){
    this.perfil = perf;
    console.log(this.perfil.Salt)
  }

  getPerfil(perfil:Perfil){
    return perfil;
  }

}
