import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Escuderia } from 'src/app/models/escuderia';
import { Piloto } from 'src/app/models/piloto';
import { AuthService } from 'src/app/service/auth.service';
import { EquipoService } from 'src/app/service/equipo.service';
import Swal from 'sweetalert2';
import * as countries from 'country-data';

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
  filtro2:string=null;
  filtroNombre:string=null;

  // Objetos del equipo
  escuderia:Escuderia=new Escuderia();
  pilotos:Piloto[]=[];
  escuderias:string[]= [];
  paises:string[];

  constructor(
    private renderer:Renderer2,
    private authService:AuthService, 
    private equipoService: EquipoService,
    private router: Router
  ) { 
    this.renderer.listen('window', 'click', e=>{
      if(
          e.target.className.includes("conformacion") || e.target.className.includes("escuderia") || e.target.className.includes("pilotos")
        ){
          this.showingMarket = false;
          this.selectedFrame = 0;
          this.filtro2 = null;
          this.filtroNombre = null;
        }
    })
  }

  ngOnInit(): void {
    this.paises = countries.countries.all;
    this.equipoService.getAllEscuderias().then((res:Escuderia[]|any)=>{
      if(res as Escuderia){
        res.forEach(e=>this.escuderias.push(e.Name));
      }
    })
    console.log(this.authService.perfilUsuario)
    if(!this.authService.perfilUsuario && !this.authService.perfilUsuario.Token){
      console.log('SASDSAD')
      this.escuderia = {
        Name:'',
        Country:'',
        Price:0, 
        Photo:''
      };
      for(let i=0;i<5;i++){
        this.pilotos[i] = {
          Name:'',
          Photo:'' ,
          Price:0,
          Racing_Team:''
        };
      }
    }else{
      this.escuderia = this.equipoService.editingRacingTeam;
      this.pilotos = this.equipoService.editingPilotos;
    }
  }

  buyOpcion(opcion:Escuderia|Piloto){
    let returnedMoney = 0;
    if(this.selectedFrame == 1){
      if(this.escuderia){
        returnedMoney += this.escuderia.Price;
      }
      this.escuderia = opcion as Escuderia;
    }else{
      const pilotoActual = this.pilotos[this.selectedFrame-1];
      if(this.pilotos.find(e=>e.Name==opcion.Name)){
        Swal.fire('Error', 'This pilot is already present in your team', 'error');
        return; 
      }
      if(pilotoActual){
        if(this.authService.perfilUsuario.Money+pilotoActual.Price < opcion.Price){
          Swal.fire('Not enough money', 'You dont have enough money to buy this!', 'warning');
          return;
        }
        returnedMoney += pilotoActual.Price;
      }
      this.pilotos[this.selectedFrame==6?0:this.selectedFrame-1] = opcion as Piloto;
    }
    this.authService.perfilUsuario.Money -= (opcion.Price - returnedMoney);
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
    this.equipoService.getMercadoPilotos(this.currentPage, this.filtroNombre, this.filtro2).then(res=>{
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
    this.equipoService.getMercadoEscuderias(this.currentPage, this.filtroNombre, this.filtro2).then(res=>{
      if(res){
        this.opcionesMercado = res;
        Swal.close();
      }
    });
  }

  isTeamComplete(){
    let teamComplete = true;
    if(this.escuderia && this.escuderia.Name != ''){
      this.pilotos.forEach(piloto =>{
        if(piloto && piloto.Name != ''){
          teamComplete = teamComplete && true;
        }else{
          teamComplete = false;
        }
      });
    }else{
      teamComplete = false;
    }
    return teamComplete;
  }

  saveTeam(){
    Swal.fire('Loading', 'Please wait...');
    Swal.showLoading();
    if(this.authService.perfilUsuario.Money < 0){
      Swal.fire('Not enough money', 'You dont have enough money to build this team!', 'warning');
      return;
    }
    if(!this.isTeamComplete()){
      Swal.fire('Team is not complete', 'Please chose 1 racing team and 5 pilots in order to save your new team!', 'warning');
      return;
    }
    if(this.equipoService.editingTeam == 'Team 1'){
      this.authService.perfilUsuario.Teams[0] = {
        Racing_Team:this.escuderia,
        Pilots:this.pilotos,
        Name:'Team 1',
        Username:this.authService.perfilUsuario.Username,
        Racing_Team_Name:this.escuderia.Name
      }
    }else{
      this.authService.perfilUsuario.Teams[1] = {
        Racing_Team:this.escuderia,
        Pilots:this.pilotos,
        Name:'Team 2',
        Username:this.authService.perfilUsuario.Username,
        Racing_Team_Name:this.escuderia.Name
      }
    }
    this.equipoService.uploadEquipo(this.authService.perfilUsuario).then(res=>{
      Swal.fire('Success','Your teams have been updated!');
      this.goToLeaderboards();
    });
  }

  goToLeaderboards(){
    // CAMBIAR
    this.router.navigateByUrl('/user');
  }

  filter(){
    this.filtroNombre = this.filtroNombre==''?null:this.filtroNombre;
    if(this.marketType == 'piloto'){
      this.setActiveFrame(this.selectedFrame);
    }else{
      this.setActiveFrameEscuderia(this.selectedFrame);
    }
  }

}
