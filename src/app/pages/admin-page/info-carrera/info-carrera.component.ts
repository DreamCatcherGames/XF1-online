import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarreraService } from 'src/app/service/carrera.service';
import {Carrera} from 'src/app/models/carrera';

@Component({
  selector: 'app-info-carrera',
  templateUrl: './info-carrera.component.html',
  styleUrls: ['./info-carrera.component.scss']
})
export class InfoCarreraComponent implements OnInit {

  carreraId:string;
  nombreCampeonato:string;
  pais:string;

  carreraActual: Carrera;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carreraService: CarreraService

  ){
  }

  async ngOnInit() {
    this.carreraId=this.activatedRoute.snapshot.paramMap.get("carreraId");
    this.nombreCampeonato = this.activatedRoute.snapshot.paramMap.get("nombre");
    this.pais = this.activatedRoute.snapshot.paramMap.get("pais");

    this.carreraActual = await this.carreraService.getCarrera(this.carreraId, this.nombreCampeonato, this.pais);
    console.log(this.carreraActual);

    //this.campeonatoActual = await this.campeonatoService.getCampeonato(this.id);
    //this.carreras = await this.campeonatoService.getRaces(this.campeonatoActual.id);
  }

}
