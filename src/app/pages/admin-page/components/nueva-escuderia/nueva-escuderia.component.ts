import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as countries from 'country-data';

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
  }

  closeModal(){
    this.formData.reset()
    this.closeEvent.emit();
  }

}
