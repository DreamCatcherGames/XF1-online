import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url: string = environment.url + '/api';

  constructor() { }

  get(endpoint:string){
    const fullUrl = this.url + '/' + endpoint;
    return fetch(fullUrl);
  }

  post(endpoint:string, body:string){
    const fullUrl = this.url + '/' + endpoint;
    console.log(fullUrl)
    const requestObj = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: body,
    };
    return fetch(fullUrl, requestObj);
  }

}
