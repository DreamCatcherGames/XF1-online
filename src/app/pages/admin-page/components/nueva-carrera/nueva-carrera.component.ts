import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Carrera} from 'src/app/models/Carrera';

import {CustomValidatorsService} from 'src/app/service/custom-validators.service';

@Component({
  selector: 'app-nueva-carrera',
  templateUrl: './nueva-carrera.component.html',
  styleUrls: ['./nueva-carrera.component.scss']
})
export class NuevaCarreraComponent implements OnInit {

  formData: FormGroup;

  @Output() closeEvent = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private customValidatorsService: CustomValidatorsService

  ) {}

  ngOnInit(): void {
    this.formData = this.fb.group({
       nombre: ['', Validators.required],
       startDatetime: ['', Validators.required],
       endDatetime: ['', Validators.required],
       clasificatoriaDatetime: ['', Validators.required],
       competenciaDatetime: ['', Validators.required],
       pais: ['', Validators.required],
       nombrePista: ['', Validators.required],
       nombreCampeonato: ['Campeonato 1', Validators.required],
    },
    {
      validator: [
        this.customValidatorsService.dateValidation('startDatetime', 'endDatetime'),
        this.customValidatorsService.dateValidation('clasificatoriaDatetime','competenciaDatetime')
      ],
    },
    )

    this.formData.controls['nombreCampeonato'].disable();

  }

  submit(){
    if(this.formData.valid){
      this.closeEvent.emit();
    }
  }

  closeModal(){
    this.formData.reset()
    this.closeEvent.emit();
  }

}
