import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { LigaPublica } from '../models/liga';
import { Puntaje } from '../models/puntaje';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  publicLeagueID:string='';
  privateLeagueID:string='';

  constructor(
    private restService:RestService,
    private authService:AuthService,
    private errorService: ErrorService
  ) { }

  getPuntajes(pageNumber:number):Promise<Puntaje[] | any>{

    const pageSize = 10;
    
    return this.restService.get(
      'League/getPage/' + this.publicLeagueID + '/'+ this.authService.perfilUsuario.Token + '/'+this.authService.perfilUsuario.Salt + '/' + 
      pageSize + '/' + pageNumber).then(res=>{
        if(res.ok){
          return res.json();
        }else{
          throw res;
        }
    }).then(res=>{
      const puntajeArray:Puntaje[]=[];

      res.forEach(element=>{
        puntajeArray.push(element as Puntaje);
      })

      return puntajeArray;
    }).catch(err=>{
      console.log(err)
      Swal.fire('Error', 'There has been an unknown error, please contact support', 'error');
    }); 
  }

  getPublicLeague():Promise<LigaPublica>{
    return this.restService.get(
      'League/getPublicLeague/' + this.authService.perfilUsuario.Token + '/'+this.authService.perfilUsuario.Salt
    ).then(res=>{
      if(res.ok){
        return res.json();
      }else{
        throw res;
      }
    }).catch(err=>{
      this.errorService.handle(err);
    }).catch(err=>{
      Swal.fire('Error', 'There has been an unknown error', 'error');
    })
  }

}
 