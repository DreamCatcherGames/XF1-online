import { Component, OnInit } from '@angular/core';
import { LigaPrivada, LigaPublica } from 'src/app/models/liga';
import { Puntaje } from 'src/app/models/puntaje';
import { AuthService } from 'src/app/service/auth.service';
import { LeaderboardService } from 'src/app/service/leaderboard.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { ErrorService } from 'src/app/service/error.service';
import { LeaderboardCardService, positionInfo } from 'src/app/service/leaderboard-card.service';

export interface PeriodicElement {
  position: number;
  puntaje: Puntaje;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, puntaje: {League_Key: '12', Username: 'Hydrogen', Points: 1.0079}}
];

@Component({
  selector: 'app-private-league',
  templateUrl: './private-league.component.html',
  styleUrls: ['./private-league.component.scss']
})
export class PrivateLeagueComponent implements OnInit {

  selectedRowIndex = 1;
  displayedColumns: string[] = ['position', 'name', 'points'];
  //displayedColumns: string[] = ['position'];
  dataSource:PeriodicElement[]=[]; 
  puntajes:Puntaje[]=[];
  currentPage = 0;
  test = [0,1,2,3,4]
  publicLeague:LigaPublica;
  privateLeague:LigaPrivada = new LigaPrivada();
  
  privateLeaderboardInfo:positionInfo = new positionInfo();

  constructor(
    private leaderboardService: LeaderboardService,
    private router: Router,
    private errorService: ErrorService,
    private leaderboardCardService: LeaderboardCardService
  ) { }

  debug(debugEle){
    console.log(debugEle);
  }

  
  async ngOnInit(){

    this.privateLeaderboardInfo = await this.leaderboardCardService.getPrivateLeagueInfo() as positionInfo;
    this.privateLeague = await this.leaderboardService.getPrivateLeague() as LigaPrivada;
    this.leaderboardService.getPuntajesPrivate(this.currentPage).then(res=>{
      if(res){
        this.publicLeague = res as LigaPublica;
        this.leaderboardService.publicLeagueID= this.publicLeague.Unique_Key;

        this.leaderboardService.getPuntajesPrivate(this.currentPage).then(res => {
          if(res){
            res.forEach(e=>this.puntajes.push(e as Puntaje));
            var index;
            const tempArray = [];
            
            for (index in this.puntajes){
              console.log("Entre " + index)
              tempArray.push({
                position: Number(index)+1,
                puntaje: this.puntajes[index]
              })
            }
            console.log(tempArray)
            this.dataSource = tempArray;
          }
        });
      }
    })
  }

  showMore(){
    this.currentPage+=1;
    this.errorService.showLoading();

    this.leaderboardService.getPuntajesPrivate(this.currentPage).then(res => {
      if(res){
        res.forEach(e=>this.puntajes.push(e as Puntaje));
        var index;
        const tempArray = [];

        for (index in this.puntajes){
          console.log("Entre " + index)
          tempArray.push({
            position: index,
            puntaje: this.puntajes[index]
          })
        }

        this.dataSource = tempArray; 
        Swal.close();
      }
    });
    

  }

  toProfile(){
    this.router.navigateByUrl('/user/perfil')
  }

  

}
