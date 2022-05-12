import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as moment from 'moment';

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

      const momentFirstDate = moment(firstDateControl.value);
      const momentSecondDate = moment(secondDateControl.value);

      console.log(momentFirstDate.isAfter(momentSecondDate))

      if(momentFirstDate.isAfter(momentSecondDate)){
        firstDateControl.setErrors({firstDateIsAfter:true});
      }else{
        firstDateControl.setErrors(null);
      }

    }
  }



}
