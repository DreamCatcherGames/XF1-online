import { Component, OnInit } from '@angular/core';
import { LigaPublica } from 'src/app/models/liga';
import { Puntaje } from 'src/app/models/puntaje';
import { AuthService } from 'src/app/service/auth.service';
import { LeaderboardService } from 'src/app/service/leaderboard.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { ErrorService } from 'src/app/service/error.service';

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
    private errorService: ErrorService
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
                position: Number(index)+1,
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
    this.errorService.showLoading();

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
        Swal.close();
      }
    });
    

  }

  toProfile(){
    this.router.navigateByUrl('/user/perfil')
  }

}
