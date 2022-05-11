import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import {Campeonato} from 'src/app/models/campeonato';

import { CustomValidatorsService } from 'src/app/service/custom-validators.service';

@Component({
  selector: 'app-nuevo-campeonato',
  templateUrl: './nuevo-campeonato.component.html',
  styleUrls: ['./nuevo-campeonato.component.scss']
})
export class NuevoCampeonatoComponent implements OnInit {

  formData: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customValidatorsService: CustomValidatorsService
  ) { }

  ngOnInit(): void {
    this.formData = this.fb.group(
      {
        name: ['', Validators.required],
        startDatetime: ['', Validators.required],
        endDatetime : ['', Validators.required],
        rules: ['', Validators.required]
      },
      {
        validator: this.customValidatorsService.dateValidation('startDatetime', 'endDatetime')
      }
    )
  }

  onClickSubmit(){
      //console.log(this.formData.value);
      //this.validateForm();
  }

  validateForm():boolean{
    //this.formData.controls['name'].setErrors({passwordMismatch:true}); 
    return true;
  }

}
