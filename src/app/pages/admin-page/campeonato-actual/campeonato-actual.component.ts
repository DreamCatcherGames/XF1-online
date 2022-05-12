import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campeonato-actual',
  templateUrl: './campeonato-actual.component.html',
  styleUrls: ['./campeonato-actual.component.scss']
})
export class CampeonatoActualComponent implements OnInit {

  isShowingNuevoCampeonatoModal: boolean=false;
  isShowingNuevaCarreraModal: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  showNuevoCampeonatoModal():void {
    this.isShowingNuevoCampeonatoModal = true;
  }

  closeNuevoCampeonatoModal():void{
    this.isShowingNuevoCampeonatoModal = false;
  }

  closeNuevaCarreraModal():void {
    this.isShowingNuevaCarreraModal = false;
  }

}
