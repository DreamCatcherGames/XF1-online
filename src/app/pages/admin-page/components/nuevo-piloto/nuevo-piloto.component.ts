import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Escuderia } from 'src/app/models/escuderia';

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
  }

  closeModal(){
    this.formData.reset()
    this.closeEvent.emit();
  }

}
