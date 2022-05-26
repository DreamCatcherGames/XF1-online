import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Escuderia } from 'src/app/models/Escuderia';
import { Piloto } from 'src/app/models/piloto';
import { AuthService } from 'src/app/service/auth.service';
import { EquipoService } from 'src/app/service/equipo.service';
import Swal from 'sweetalert2';

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
  currentPage:number;
  existsMoreContent;

  // Objetos del equipo
  escuderia:Escuderia;
  pilotos:Piloto[]=[];

  constructor(
    private renderer:Renderer2,
    private authService:AuthService, 
    private equipoService: EquipoService
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
    if(!this.authService.perfilUsuario || !this.escuderiaInputJson || this.pilotosInputJson){
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
      this.escuderia = opcion as Escuderia;
    }else{
      this.pilotos[this.selectedFrame-1] = opcion as Piloto;
    }
    this.authService.perfilUsuario.saldo -= opcion.precio;
  }

  showMore(){
    this.currentPage += 1; 
    console.log(this.marketType);
    if(this.marketType=='piloto'){
      this.equipoService.getMercadoPilotos(this.currentPage).then(res=>{
        if(res){
          res.forEach(e=>(this.opcionesMercado as Piloto[]).push(e as Piloto));
          Swal.close();
        }
      })
    }else{
      this.equipoService.getMercadoEscuderias(this.currentPage).then(res=>{
        if(res){
          res.forEach(e=>(this.opcionesMercado as Escuderia[]).push(e as Escuderia));
          Swal.close();
        }
      })
    }
  }

  setActiveFrame(frameNumber:number){
    Swal.fire('Loading', 'Fetching available pilots, please wait');
    Swal.showLoading();
    this.marketType='piloto';
    this.selectedFrame = frameNumber;
    this.showingMarket = true;
    this.currentPage = 0; 
    this.equipoService.getMercadoPilotos(this.currentPage).then(res=>{
      if(res){
        this.opcionesMercado = res;
        Swal.close();
      }
    });
  }

  setActiveFrameEscuderia(frameNumber:number){
    Swal.fire('Loading', 'Fetching available racing teams, please wait');
    Swal.showLoading();
    this.marketType = 'escuderia';
    this.selectedFrame = frameNumber;
    this.showingMarket = true;
    this.currentPage = 0; 
    this.equipoService.getMercadoEscuderias(this.currentPage).then(res=>{
      if(res){
        this.opcionesMercado = res;
        Swal.close();
      }
    });
  }

}
