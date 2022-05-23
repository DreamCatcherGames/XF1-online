import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo-card',
  templateUrl: './equipo-card.component.html',
  styleUrls: ['./equipo-card.component.scss']
})
export class EquipoCardComponent implements OnInit {
  
  isShowingExistingTeam: boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
