import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Escuderia } from 'src/app/models/Escuderia';
import { Piloto } from 'src/app/models/piloto';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-equipo-page',
  templateUrl: './equipo-page.component.html',
  styleUrls: ['./equipo-page.component.scss']
})
export class EquipoPageComponent implements OnInit {

  // Inputs
  @Input() escuderiaInputJson:string;
  @Input() pilotosInputJson:string;

  //Variables
  selectedFrame:number;
  showingMarket:boolean = false;
  marketType:string = '';
  opcionesMercado:Escuderia[]|Piloto[] = [];

  // Objetos del equipo
  escuderia:Escuderia;
  pilotos:Piloto[]=[];

  constructor(
    private renderer:Renderer2,
    private authService:AuthService
  ) { 
    this.renderer.listen('window', 'click', e=>{
      console.log(e.target)
      if(
          e.target.className.includes("conformacion") || e.target.className.includes("escuderia") || e.target.className.includes("pilotos")
        ){
          this.showingMarket = false;
          this.selectedFrame = 0;
        }
    })
  }

  ngOnInit(): void {
    if(!this.authService.perfilUsuario){
      this.escuderia = {
        nombre:'',
        pais:'',
        precio:0, 
        image:''
      };
      for(let i=0;i<5;i++){
        this.pilotos[i] = {
          nombre:'',
          image:'' ,
          precio:0,
          pais: '',
          escuderia:''
        };
      }
    }else{
      this.escuderia = JSON.parse(this.escuderiaInputJson);
      this.pilotos = JSON.parse(this.pilotosInputJson);
    }
  }

  buyOpcion(opcion:Escuderia|Piloto){
    if(this.selectedFrame == 1){
      this.escuderia = opcion;
    }else{
      this.pilotos[this.selectedFrame-1] = opcion as Piloto;
    }
    this.authService.perfilUsuario.saldo -= opcion.precio;
  }

  setActiveFrame(frameNumber:number){
    this.marketType='piloto';
    this.selectedFrame = frameNumber;
    this.showingMarket = true;
  }

  setActiveFrameEscuderia(frameNumber:number){
    this.marketType = 'escuderia';
    this.selectedFrame = frameNumber;
    this.showingMarket = true;
  }

}
