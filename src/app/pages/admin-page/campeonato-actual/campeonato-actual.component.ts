import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campeonato-actual',
  templateUrl: './campeonato-actual.component.html',
  styleUrls: ['./campeonato-actual.component.scss']
})
export class CampeonatoActualComponent implements OnInit {

  showNuevoCampeonatoModal: boolean;
  showNuevaCarrera: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
