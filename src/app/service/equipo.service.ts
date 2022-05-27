import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Equipo } from '../models/equipo';
import { Escuderia } from '../models/Escuderia';
import { PerfilUsuario } from '../models/perfilUsuario';
import { Piloto } from '../models/piloto';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  editingTeam:string='Team 1';
  editingRacingTeam:Escuderia;
  editingPilotos:Piloto[];

  constructor(
    private restService:RestService,
    private authService:AuthService,
    private errorService: ErrorService
  ) { }

  uploadEquipo(perfilUpdated:PerfilUsuario):Promise<any>{
    return this.restService.put(
      '/Player/updateProfile/' + this.authService.perfilUsuario.Token + '/'+this.authService.perfilUsuario.Salt,
      JSON.stringify(perfilUpdated)
    ).then(res=>{
      if(res.ok){
        return res.text();
      }else{
        throw res;
      }
    }).catch(err=>{
      this.errorService.handle(err);
    }).catch(err=>{
      Swal.fire('Error', 'There has been an unknown error', 'error');
    });
  }

  getAllEscuderias():Promise<Escuderia[] | any>{
    return this.restService.get(
      'RacingTeams/getAllRacingTeams/' + this.authService.perfilUsuario.Token + '/'+this.authService.perfilUsuario.Salt
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

  getMercadoEscuderias(pageNumber:number, filtroNombre?:string, filtroPais?:string):Promise<Escuderia[] | any >{
    const pageSize = 5;
    
    return this.restService.post(
      'RacingTeams/searchRacingTeam/' + this.authService.perfilUsuario.Token + '/'+this.authService.perfilUsuario.Salt + '/' + 
      pageSize + '/' + pageNumber,
      JSON.stringify({
        Name:filtroNombre,
        Country:filtroPais
      })
    ).then(res=>{
        if(res.ok){
          return res.json();
        }else{
          throw res;
        }
    }).then(res=>{
      const escuderiaArray:Escuderia[]=[];

      res.forEach(element=>{
        escuderiaArray.push(element as Escuderia);
      })

      return escuderiaArray;
    }).catch(err=>{
      console.log(err)
      Swal.fire('Error', 'There has been an unknown error, please contact support', 'error');
    });
  }

  getMercadoPilotos(pageNumber:number, filtroNombre?:string, filtroEscuderia?:string):Promise<void | Piloto[]>{

    const pageSize = 5;
    
    return this.restService.post(
      'Pilots/searchPilot/' + this.authService.perfilUsuario.Token + '/'+this.authService.perfilUsuario.Salt + '/' + 
      pageSize + '/' + pageNumber,
      JSON.stringify({
        Name:filtroNombre,
        Racing_Team:filtroEscuderia  
      })
    ).then(res=>{
        if(res.ok){
          return res.json();
        }else{
          throw res;
        }
    }).then(res=>{
      const pilotoArray:Piloto[]=[];

      res.forEach(element=>{
        pilotoArray.push(element as Piloto);
      })

      return pilotoArray;
    }).catch(err=>{
      console.log(err)
      Swal.fire('Error', 'There has been an unknown error, please contact support', 'error');
    });
    
  }
    


}
