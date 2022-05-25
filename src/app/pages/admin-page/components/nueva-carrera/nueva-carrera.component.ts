import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {CarreraService} from 'src/app/service/carrera.service';

import * as moment from 'moment';
import Swal from 'sweetalert2';
import * as countries from 'country-data';

import {CustomValidatorsService} from 'src/app/service/custom-validators.service';
import { CampeonatoService } from 'src/app/service/campeonato.service';

@Component({
  selector: 'app-nueva-carrera',
  templateUrl: './nueva-carrera.component.html',
  styleUrls: ['./nueva-carrera.component.scss']
})
export class NuevaCarreraComponent implements OnInit {

  formData: FormGroup;
  paises:string[];

  @Output() closeEvent = new EventEmitter();
  @Input() championshipId :string;

  championshipName:string;

  constructor(
    private fb: FormBuilder,
    private customValidatorsService: CustomValidatorsService,
    private carreraService: CarreraService,
    private campeonatoService: CampeonatoService
  ) {}

  ngOnInit(): void {

    this.paises = countries.countries.all;

    this.formData = this.fb.group({
       nombre: ['', Validators.required],
       startDatetime: ['', Validators.required],
       endDatetime: ['', Validators.required],
       clasificatoriaDatetime: ['', Validators.required],
       competenciaDatetime: ['', Validators.required],
       pais: ['', Validators.required],
       nombrePista: ['', Validators.required],
       nombreCampeonato: ['', Validators.required],
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

  ngOnChanges() {
    this.campeonatoService.getCampeonato(this.championshipId).then((fetchedCampeonato)=>{
      console.log('getted')
      this.championshipName = fetchedCampeonato.name;
      this.formData.patchValue({nombreCampeonato:this.championshipName});
    })
  }

  submit(){
    if(this.formData.valid){
      const momentStartdatetime = moment(this.formData.value.startDatetime);
      const momentEnddatetime = moment(this.formData.value.endDatetime);
      const momentQualificationdate = moment(this.formData.value.clasificatoriaDatetime);
      const momentCompetitiondate = moment(this.formData.value.competenciaDatetime);

      this.carreraService.createNewCarrera(
        {
          name:this.formData.value.nombre,
          startDate:momentStartdatetime.format('YYYY-MM-DD'),
          endDate:momentEnddatetime.format('YYYY-MM-DD'),
          startTime:momentStartdatetime.format('H:m:s'),
          endTime:momentEnddatetime.format('H:m:s'),
          country:this.formData.value.pais,
          trackName:this.formData.value.nombrePista,
          clasificatoriaDate:momentQualificationdate.format('YYYY-MM-DD'),
          competenciaDate: momentCompetitiondate.format('YYYY-MM-DD'),
        }, this.championshipId
      ).then((response)=>{
        if (response.status != 200){
          throw response;
        }else{
          return response
        }
      }).then((res)=>{
        Swal.fire(
          'Exito!',
          'La carrera fue creada con exito',
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

  closeModal(){
    this.formData.reset()
    this.closeEvent.emit();
  }

}
