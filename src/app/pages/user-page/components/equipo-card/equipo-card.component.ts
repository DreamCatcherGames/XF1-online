import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-equipo-card',
  templateUrl: './equipo-card.component.html',
  styleUrls: ['./equipo-card.component.scss']
})
export class EquipoCardComponent implements OnInit {

  @Input() equipoInputString = null;
  //equipo:Equipo
  
  isShowingExistingTeam: boolean=true;

  constructor() { }

  ngOnInit(): void {
    if(this.equipoInputString){

    }
  }

}
