import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Equipo } from '../models/equipo';
import { Escuderia } from '../models/Escuderia';
import { Piloto } from '../models/piloto';
import { AuthService } from './auth.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  constructor(
    private restService:RestService,
    private authService:AuthService
  ) { }

  uploadEquipo(equipoToUpload:Equipo):Promise<any>{
    return new Promise(resolve=>null);
  }

  getMercadoEscuderias(pageNumber:number):Promise<Escuderia[] | any >{
    const pageSize = 5;
    
    return this.restService.get(
      'RacingTeams/getPage/' + this.authService.perfilUsuario.Token + '/'+this.authService.perfilUsuario.Salt + '/' + 
      pageSize + '/' + pageNumber
    ).then(res=>{
        if(res.ok){
          return res.json();
        }else{
          throw res;
        }
    }).then(res=>{
      const escuderiaArray:Escuderia[]=[];

      res.forEach(element=>{
        escuderiaArray.push({
          nombre:element.Name,
          pais:element.Country,
          precio:element.Price,
          image:element.Photo
        });
      })

      return escuderiaArray;
    }).catch(err=>{
      console.log(err)
      Swal.fire('Error', 'There has been an unknown error, please contact support', 'error');
    });
  }

  getMercadoPilotos(pageNumber:number):Promise<void | Piloto[]>{

    const pageSize = 5;
    
    return this.restService.get(
      'Pilots/getPage/' + this.authService.perfilUsuario.Token + '/'+this.authService.perfilUsuario.Salt + '/' + 
      pageSize + '/' + pageNumber
    ).then(res=>{
        if(res.ok){
          return res.json();
        }else{
          throw res;
        }
    }).then(res=>{
      const pilotoArray:Piloto[]=[];

      res.forEach(element=>{
        pilotoArray.push({
          nombre:element.Name,
          escuderia:element.Racing_Team,
          precio:element.Price,
          image:element.Photo
        });
      })

      return pilotoArray;
    }).catch(err=>{
      console.log(err)
      Swal.fire('Error', 'There has been an unknown error, please contact support', 'error');
    });
    
  }
    


}
