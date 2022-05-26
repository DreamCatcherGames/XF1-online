import { Injectable } from '@angular/core';
import { Registro } from '../models/registro';
import { RestService } from './rest.service';


class requestRegistro {
  Username:string;
  Country:string;
  First_Name: string;
  Last_Name: string;
  Email:string;
  Encrypted_Password:string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

   // Remove
   private authToken:string='dkQhxuDOS02Z1jZJ2KRpng==';
   private salt:string='YGXMKyXDIemAKw==';
 
   constructor(
     private restService:RestService
   ) { }

   createNewUser(nuevoRegistro:Registro):Promise<Response>{

    const requestRegistroObj: requestRegistro = {
      Username: nuevoRegistro.Username,
      Country: nuevoRegistro.Country,
      First_Name: nuevoRegistro.First_Name,
      Last_Name: nuevoRegistro.Last_Name,
      Email: nuevoRegistro.Email,
      Encrypted_Password: nuevoRegistro.Encrypted_Password
    };

    console.log(requestRegistroObj)
    return this.restService.post(
      'Player/registerRequest', 
      JSON.stringify(requestRegistroObj));
  }
}
