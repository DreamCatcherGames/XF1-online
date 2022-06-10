import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { LigaPrivada, LigaPublica } from '../models/liga';
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

  getPrivateLeague():Promise<LigaPrivada>{
    return this.restService.get(
      'Player/getPrivateLeague/' + this.authService.perfilUsuario.Token + '/'+this.authService.perfilUsuario.Salt
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
  getPrivateLeagues():Promise<LigaPrivada[] | any>{
    return this.restService.get(
      'League/getPrivateLeagues/'+
      this.authService.perfilUsuario.Token + '/'+
      this.authService.perfilUsuario.Salt
    ).then(res=>{
      if(res.status == 200){
        return res.json();
      }
    }).catch(err=>{
      this.errorService.handle(err);
    })
  }

  getPrivateLeagueInfo(){
    return this.restService.get(
      'Player/getPrivateLeague/'+this.authService.perfilUsuario.Token+'/'+
      this.authService.perfilUsuario.Salt
    ).then(res=>{
      if(res.status == 200){
        return res.json();
      }
    }).catch(err=>{
      this.errorService.handle(err);
    })
  }

  requestJoin(privateLeagueCode:string): Promise<any>{
    return this.restService.post(
      'League/joinLeague/' + 
      this.authService.perfilUsuario.Token + '/' +
      this.authService.perfilUsuario.Salt,
      JSON.stringify({
        Unique_Key: privateLeagueCode
      })
    ).then(res=>{
      if(res.status==200){
        return res.text();
      }else{
        throw res;
      }
    }).catch(err=>{
      this.errorService.handle(err);
    });
  }

  sendJoinResult(leagueId:string, userId:string, approval:boolean): Promise<any>{
    const body = JSON.stringify({
      League_Key:leagueId,
      Requesting_User:userId
    });
    return this.restService.post(
      'League/aproveJoin/'+approval+'/'+
      this.authService.perfilUsuario.Token + '/' +
      this.authService.perfilUsuario.Salt,
      body 
    ).then(res=>{
      if(res.status == 200){
        return res.text();
      }else{
        throw res;
      }
    }).catch(err=>{
      this.errorService.handle(err);
    });
  }

  getPuntajesPrivate(pageNumber:number):Promise<Puntaje[] | any>{

    const pageSizePrivate = 20;
    
    return this.restService.get(
      'League/getPage/' + this.privateLeagueID + '/'+ this.authService.perfilUsuario.Token + '/'+this.authService.perfilUsuario.Salt + '/' + 
      pageSizePrivate + '/' + pageNumber).then(res=>{
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

}
 