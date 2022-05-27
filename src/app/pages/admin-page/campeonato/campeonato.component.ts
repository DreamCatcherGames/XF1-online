import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Campeonato} from 'src/app/models/campeonato';
import { Carrera } from 'src/app/models/carrera';
import { CampeonatoService } from 'src/app/service/campeonato.service';


@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.scss']
})
export class CampeonatoComponent implements OnInit {

  isShowingNuevoCampeonatoModal: boolean=false;
  isShowingNuevaCarreraModal: boolean=false;

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
  id:string;

  constructor(
    private campeonatoService:CampeonatoService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit(){
      this.id=this.activatedRoute.snapshot.paramMap.get("champId");
      this.campeonatoActual = await this.campeonatoService.getCampeonato(this.id);
      this.carreras = await this.campeonatoService.getRaces(this.campeonatoActual.id);
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

  showHistorico():void{
    this.router.navigateByUrl('/admin/historico')
  }

}
