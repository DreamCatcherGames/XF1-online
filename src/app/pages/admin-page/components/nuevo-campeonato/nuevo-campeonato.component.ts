import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-nuevo-campeonato',
  templateUrl: './nuevo-campeonato.component.html',
  styleUrls: ['./nuevo-campeonato.component.scss']
})
export class NuevoCampeonatoComponent implements OnInit {

  formData: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl(),
      rules: new FormControl(),
      startDatetime: new FormControl(),
      endDatetime: new FormControl(),
    });
  }

  onClickSubmit(){
    console.log(this.formData.value);
  }

}
