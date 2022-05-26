import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as countries from 'country-data';
import { ErrorService } from 'src/app/service/error.service';
import { EscuderiaService } from 'src/app/service/escuderia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-escuderia',
  templateUrl: './nueva-escuderia.component.html',
  styleUrls: ['./nueva-escuderia.component.scss']
})
export class NuevaEscuderiaComponent implements OnInit {

  formData: FormGroup;
  paises: string[];

  @Output() closeEvent = new EventEmitter();
  @Input() championshipId :string;

  constructor(
    private fb: FormBuilder,
    private escuderiaService: EscuderiaService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.paises = countries.countries.all;

    this.formData = this.fb.group({
      nombre: ['', Validators.required],
      image: ['', Validators.required],
      precio: ['', Validators.required],
      pais: ['', Validators.required]
    });

  }

  submit(){
    console.log(this.formData);
    //this.errorService.showLoading();
    if(this.formData.valid){
      this.escuderiaService.createNewEscuderia({
        Name:this.formData.value.nombre,
        Country:this.formData.value.pais,
        Price:this.formData.value.precio,
        Photo:this.formData.value.image
      }).then(res=>{
        Swal.fire('Success','This new race team has been added');
        this.closeModal();
      })
    }
  }

  closeModal(){
    this.formData.reset()
    this.closeEvent.emit();
  }

}
