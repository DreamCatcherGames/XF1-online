import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo';
import { Perfil } from '../models/perfil';
import { PerfilUsuario } from '../models/perfilUsuario';
import { ErrorService } from './error.service';
import { RestService } from './rest.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public perfil : Perfil;
  public perfilUsuario : PerfilUsuario={
    Teams:[
      new Equipo(),
      new Equipo()
    ],
    Username:'',
    Country:'',
    First_Name:'',
    Last_Name:'',
    Email:'',
    Money:0,
    Encrypted_Password:'',
    Salt:'',
    Token:'',
    Active:true
  };

  constructor(
    private restService: RestService,
    private errorService: ErrorService
  ) { }

  loginRequest(dataToSend):Promise<any>{
    return this.restService.post("Admin/loginRequest",JSON.stringify(dataToSend));
  }

  loginRequestUser(dataToSend):Promise<any>{
    return this.restService.post("Player/loginRequest",JSON.stringify(dataToSend));
  }

  setPerfil(perf : Perfil){
    this.perfil = perf;
  }

  getPerfil(perfil:Perfil){
    return perfil;
  }

  hasNotifications():Promise<boolean | any>{
    return this.restService.post(
      "Player/hasNotifications/" + this.perfilUsuario.Token + 
      '/' + this.perfilUsuario.Salt,
      "{}"
    ).then(res=>{
      if(res.status == 200){
        return res.text();
      }else{
        throw res;
      }
    }).catch(err=>{
      this.errorService.handle(err);
    })
  }

  getNotifications():Promise<Notification[] | any>{
    return this.restService.get(
      'Player/getNotifications/' + 
      this.perfilUsuario.Token + '/' +
      this.perfilUsuario.Salt
    ).then(res=>{
      if(res.status == 200){
        return res.json();
      }else{
        throw res;
      }
    }).catch(err=>{
      this.errorService.handle(err);
    })
  }

  deleteNotification(notificationId:string):Promise<any>{
    return this.restService.delete(
      'Player/deleteNotification/' +
      this.perfilUsuario.Token + '/' +
      this.perfilUsuario.Salt,
      JSON.stringify({
        Id: notificationId
      })
    );
  }

}
