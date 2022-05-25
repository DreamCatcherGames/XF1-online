import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Campeonato} from 'src/app/models/campeonato';
import { Carrera } from 'src/app/models/carrera';
import { CampeonatoService } from 'src/app/service/campeonato.service';

@Component({
  selector: 'app-campeonato-actual',
  templateUrl: './campeonato-actual.component.html',
  styleUrls: ['./campeonato-actual.component.scss']
})
export class CampeonatoActualComponent implements OnInit {

  isShowingNuevoCampeonatoModal: boolean=false;
  isShowingNuevaCarreraModal: boolean=false;
  isShowingNuevoPilotoModal: boolean=false;
  isShowingNuevaEscuderiaModal: boolean=false;

  campeonatoActual:Campeonato={
    name:'',
    rules:'',
    startDate:'',
    startTime:'',
    endDate:'',
    endTime:'', 
    id:''
  };

  carreras:Carrera[] = [];

  constructor(
    private campeonatoService:CampeonatoService,
    private router:Router
  ) { }

  async ngOnInit(){
      this.campeonatoActual = await this.campeonatoService.getCurrentCampeonato();
      this.carreras = await this.campeonatoService.getRaces(this.campeonatoActual.id);
  }

  showNuevoCampeonatoModal():void{
    this.isShowingNuevoCampeonatoModal = true;
  }

  closeNuevoCampeonatoModal():void{
    this.isShowingNuevoCampeonatoModal = false;
    this.ngOnInit();
  }

  closeNuevaCarreraModal():void {
    this.isShowingNuevaCarreraModal = false;
    this.ngOnInit();
  }

  closeNuevaEscuderiaModal():void {
    this.isShowingNuevaEscuderiaModal = false;
  }

  closeNuevoPilotoModal():void{
    this.isShowingNuevoPilotoModal = false;
  }

  showHistorico():void{
    this.router.navigateByUrl('/admin/historico')
  }

}
