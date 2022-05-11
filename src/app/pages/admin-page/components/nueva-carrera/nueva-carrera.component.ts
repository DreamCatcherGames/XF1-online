import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Carrera} from 'src/app/models/Carrera';

@Component({
  selector: 'app-nueva-carrera',
  templateUrl: './nueva-carrera.component.html',
  styleUrls: ['./nueva-carrera.component.scss']
})
export class NuevaCarreraComponent implements OnInit {

  formData;

  constructor() {}

  ngOnInit(): void {
    this.formData = new FormGroup({

    })
  }

}
