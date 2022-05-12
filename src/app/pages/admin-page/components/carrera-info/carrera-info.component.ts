import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrera-info',
  templateUrl: './carrera-info.component.html',
  styleUrls: ['./carrera-info.component.scss']
})
export class CarreraInfoComponent implements OnInit {
  startDatetime:any;
  endDatetime:any;
  constructor() { }

  ngOnInit(): void {
  }

}
