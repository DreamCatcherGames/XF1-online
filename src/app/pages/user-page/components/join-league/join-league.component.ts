import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ErrorService } from 'src/app/service/error.service';

import { LigaPrivada } from 'src/app/models/liga';
import Swal from 'sweetalert2';
import { LeaderboardService } from 'src/app/service/leaderboard.service';

@Component({
  selector: 'app-join-league',
  templateUrl: './join-league.component.html',
  styleUrls: ['./join-league.component.scss']
})
export class JoinLeagueComponent implements OnInit {

  code:string;
  leagueList:LigaPrivada[] = LigaPrivada.createNEmptyLigas(5);

  constructor(
    private errorService: ErrorService,
    private leaderboardService: LeaderboardService
  ) { }

  ngOnInit(): void {
    this.errorService.showLoading();
    this.leaderboardService.getPrivateLeagues().then(leagues=>{
      if(leagues){
        this.leagueList = leagues;
        this.errorService.hideLoading();
      }
    })
  }

  @Output() closeEvent = new EventEmitter();

  closeModal(){
    this.closeEvent.emit();
  }

  validateForm():boolean{
    return true;
  }

  changeCode(newCode:string){
    this.code = newCode;
  }

  sendCode(){
    if(this.code!=''){
      Swal.fire('Loading', 'Uploading your request, please wait...');
      Swal.showLoading();
      this.leaderboardService.requestJoin(this.code).then(res=>{
        Swal.fire('Success!', 'We will notify the owner of the league of your request, so keep an eye on your notifications!', 'success').then(()=>{
          this.closeModal();
        })
      });
    }
  }

}
