import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';

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

  closeModal(){
    this.closeEvent.emit();
  }

  onSubmit(){
    if(this.formData.valid){
      const momentStartdatetime = moment(this.formData.value.startDatetime);
      const momentEnddatetime = moment(this.formData.value.endDatetime);

      this.campeonatoService.createNewCampeonato(
        {
          name:this.formData.value.name,
          rules:this.formData.value.rules,
          startDate:momentStartdatetime.format('YYYY-MM-DD'),
          endDate:momentEnddatetime.format('YYYY-MM-DD'),
          startTime:momentStartdatetime.format('H:m:s'),
          endTime:momentEnddatetime.format('H:m:s')
        }
      ).then((response)=>{
        if (response.status != 200){
          throw response;
        }else{
          return response
        }
      }).then((res)=>{
        Swal.fire(
          'Exito!',
          'El campeonato fue creado con exito',
          'success'
        );
        this.closeModal();
      }).catch((err)=>{
        Swal.fire(
          'Error',
          'Ocurrio un error, por favor revise su formulario',
          'error'
        )
      })
    }
  }
}
