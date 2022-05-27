import { Component, OnInit } from '@angular/core';
import { LigaPublica } from 'src/app/models/liga';
import { Puntaje } from 'src/app/models/puntaje';
import { AuthService } from 'src/app/service/auth.service';
import { LeaderboardService } from 'src/app/service/leaderboard.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

export interface PeriodicElement {
  position: number;
  puntaje: Puntaje;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, puntaje: {League_Key: '12', Username: 'Hydrogen', Points: 1.0079}}
];

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})

export class LeaderboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'points'];
  //displayedColumns: string[] = ['position'];
  dataSource:PeriodicElement[]=[]; 
  puntajes:Puntaje[]=[];
  currentPage = 0;
  test = [0,1,2,3,4]
  publicLeague:LigaPublica;
  constructor(
    private leaderboardService: LeaderboardService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.leaderboardService.getPublicLeague().then(res=>{
      if(res){
        this.publicLeague = res as LigaPublica;
        this.leaderboardService.publicLeagueID= this.publicLeague.Unique_Key;

        this.leaderboardService.getPuntajes(this.currentPage).then(res => {
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
            console.log(tempArray)
            this.dataSource = tempArray;
            
            console.log(ELEMENT_DATA)
            
          }
        });

        
        
      }
    })
  }

  showMore(){
    this.currentPage+=1;

    this.leaderboardService.getPuntajes(this.currentPage).then(res => {
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
      }
    });
    

  }

  toProfile(){
    this.router.navigateByUrl('/user/perfil')
  }

}
