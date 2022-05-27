import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { Escuderia } from 'src/app/models/escuderia';
import { Piloto } from 'src/app/models/piloto';
import { EquipoService } from 'src/app/service/equipo.service';

@Component({
  selector: 'app-equipo-card',
  templateUrl: './equipo-card.component.html',
  styleUrls: ['./equipo-card.component.scss']
})
export class EquipoCardComponent implements OnInit {

  @Input() equipoJson = null
  @Input() equipoName:string;
  equipo:Equipo;

  
  @Input() isShowingExistingTeam: boolean=false;

  imagenEscuderia:string;
  imagenPilotos:string[]=[];

  constructor(
    private equipoService:EquipoService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.equipoJson){
      this.equipo = JSON.parse(this.equipoJson) as Equipo;
      if(this.equipo.Racing_Team){
      this.imagenEscuderia = this.equipo.Racing_Team.Photo;
      this.equipo.Pilots.forEach(piloto=>{
        this.imagenPilotos.push(piloto.Photo);
      })}else{
        this.imagenEscuderia='';
        for(let i =0;i<5;i++){
          this.imagenPilotos[i]='';
        }
      }
    }
    console.log(this.equipo)
  }

  goToEdit(newEquipo=false){
    this.equipoService.editingTeam = this.equipoName;
    this.equipoService.editingRacingTeam = this.equipo.Racing_Team;
    this.equipoService.editingPilotos = this.equipo.Pilots;
    this.equipoService.newEquipo = newEquipo;
    this.router.navigateByUrl('user/equipo');
  }

}
