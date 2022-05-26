import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Escuderia } from 'src/app/models/escuderia';
import { ErrorService } from 'src/app/service/error.service';
import { PilotoService } from 'src/app/service/piloto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-piloto',
  templateUrl: './nuevo-piloto.component.html',
  styleUrls: ['./nuevo-piloto.component.scss']
})
export class NuevoPilotoComponent implements OnInit {

  formData: FormGroup;
  escuderias: Escuderia[];

  @Output() closeEvent = new EventEmitter();
  @Input() championshipId :string;

  constructor(
    private fb: FormBuilder,
    private pilotoService: PilotoService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.escuderias = [];
    this.formData = this.fb.group({
      nombre: ['', Validators.required],
      image: ['', Validators.required],
      precio: ['', Validators.required],
      escuderia: ['', Validators.required]
    });
  }

  submit(){
    this.errorService.showLoading();
    if(this.formData.valid){
      this.pilotoService.createNewPiloto({
        Name:this.formData.value.nombre,
        Escuderia:this.formData.value.escuderia,
        Price:this.formData.value.precio,
        Photo:this.formData.value.image
      }).then(res=>{
        Swal.fire('Success','This new pilot has been added');
        this.closeModal();
      })
    }
  }

  closeModal(){
    this.formData.reset()
    this.closeEvent.emit();
  }

}
