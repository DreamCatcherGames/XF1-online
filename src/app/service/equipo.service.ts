import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo';
import { Escuderia } from '../models/Escuderia';
import { Piloto } from '../models/piloto';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  constructor(
    private restService:RestService
  ) { }

  uploadEquipo(equipoToUpload:Equipo):Promise<any>{
    return new Promise(resolve=>null);
  }

  getMercadoEscuderias():Promise<Escuderia[]>{
    return new Promise(resolve=>[]);
  }

  getMercadoPilotos():Promise<Piloto[]>{
    return new Promise(resolve=>[]);
  }
    


}
