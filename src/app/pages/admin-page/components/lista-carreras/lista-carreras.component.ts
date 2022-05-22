import { Component, OnInit, Input } from '@angular/core';

import { Carrera } from 'src/app/models/carrera';

@Component({
  selector: 'app-lista-carreras',
  templateUrl: './lista-carreras.component.html',
  styleUrls: ['./lista-carreras.component.scss']
})
export class ListaCarrerasComponent implements OnInit {

  @Input() listaCarrerasJson: string;
  listaCarreras: Carrera[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.listaCarreras = JSON.parse(this.listaCarrerasJson);
  }

}
