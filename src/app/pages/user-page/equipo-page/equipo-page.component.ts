import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-equipo-page',
  templateUrl: './equipo-page.component.html',
  styleUrls: ['./equipo-page.component.scss']
})
export class EquipoPageComponent implements OnInit {

  selectedFrame:number;
  showingMarket:boolean = false;
  marketType:string = '';

  constructor(private renderer:Renderer2) { 
    this.renderer.listen('window', 'click', e=>{
      console.log(e.target)
      if(
          !(e.target.className.includes("toggleMarket"))
        ){
          this.showingMarket = false;
          this.selectedFrame = 0;
        }
    })
  }

  ngOnInit(): void {
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
