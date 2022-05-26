import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  hideLoading(){
    Swal.hideLoading();
    Swal.close();
  }

  showLoading(){
    Swal.fire({
      title:'Loading...',
      text:'Please wait',
      allowEscapeKey:false,
      allowOutsideClick:false
    });
    Swal.showLoading();
  }

  parseError(errorObj:string[]){
    let result = '';
    errorObj.forEach(error=>{
      result+='<p>- '+error+'</p>';
    });
    return result;
  }

  handle(error){
    error.json().then(errObj=>{
      console.log(errObj);
      Swal.fire({
        title:'Error', 
        icon:'error',
        //text:'You have the following errors:\n'+this.parseError(errObj.errors)
        html:'<p>You have the following errors:</p>'+this.parseError(errObj.errors)
      })
    });
  }

}
