import { Component, OnInit } from '@angular/core';
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

  constructor(
    private fb: FormBuilder,
    private customValidatorsService: CustomValidatorsService

  ) {}

  ngOnInit(): void {
    this.formData = this.fb.group({
       nombre: ['', Validators.required],

    })
  }

}
