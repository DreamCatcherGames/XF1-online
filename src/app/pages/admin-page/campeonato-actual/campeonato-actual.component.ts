import { Component, OnInit } from '@angular/core';

import {Campeonato} from 'src/app/models/campeonato';
import { CampeonatoService } from 'src/app/service/campeonato.service';

@Component({
  selector: 'app-campeonato-actual',
  templateUrl: './campeonato-actual.component.html',
  styleUrls: ['./campeonato-actual.component.scss']
})
export class CampeonatoActualComponent implements OnInit {

  isShowingNuevoCampeonatoModal: boolean=false;
  isShowingNuevaCarreraModal: boolean=false;

  campeonatoActual:Campeonato;

  constructor(
    private campeonatoService:CampeonatoService,
  ) { }

  async ngOnInit(){
    this.campeonatoActual = await this.campeonatoService.getCurrentCampeonato();
    console.log(this.campeonatoActual);
  }

  showNuevoCampeonatoModal():void{
    this.isShowingNuevoCampeonatoModal = true;
  }

  closeNuevoCampeonatoModal():void{
    this.isShowingNuevoCampeonatoModal = false;
  }

  closeNuevaCarreraModal():void {
    this.isShowingNuevaCarreraModal = false;
  }

}
