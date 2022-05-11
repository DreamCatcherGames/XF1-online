import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as moment from 'moment-js';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  dateValidation(firstDate:string, secondDate:string){
    console.log(firstDate);
    console.log(secondDate);
    return (formGroup: FormGroup) => {
      const firstDateControl = formGroup.controls[firstDate];
      const secondDateControl = formGroup.controls[secondDate];

      const momentString = moment(firstDateControl.value);

      console.log(momentString);

      firstDateControl.setErrors({passwordMismatch:true});
    }
  }



}
