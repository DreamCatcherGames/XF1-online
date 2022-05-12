import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import * as moment from 'moment';

import {Campeonato} from 'src/app/models/campeonato';

import { CustomValidatorsService } from 'src/app/service/custom-validators.service';
import {CampeonatoService} from 'src/app/service/campeonato.service';

@Component({
  selector: 'app-nuevo-campeonato',
  templateUrl: './nuevo-campeonato.component.html',
  styleUrls: ['./nuevo-campeonato.component.scss']
})
export class NuevoCampeonatoComponent implements OnInit {

  formData: FormGroup;

  @Output() closeEvent = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private customValidatorsService: CustomValidatorsService,
    private campeonatoService: CampeonatoService
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

  onSubmit(){
    if(this.formData.valid){
      const momentStartdatetime = moment(this.formData.value.startDatetime);
      const momentEnddatetime = moment(this.formData.value.endDatetime);

      console.log(momentStartdatetime.toString());
      this.campeonatoService.createNewCampeonato(
        {
          name:this.formData.value.name,
          rules:this.formData.value.rules,
          startDate:momentStartdatetime.format('YYYY-MM-DD'),
          endDate:momentEnddatetime.format('YYYY-MM-DD'),
          startTime:momentStartdatetime.format('H:m:s'),
          endTime:momentEnddatetime.format('H:m:s')
        }
      ).then(()=>{
        this.closeEvent.emit();
      });
    }
  }

  validateForm():boolean{
    return true;
  }

}
