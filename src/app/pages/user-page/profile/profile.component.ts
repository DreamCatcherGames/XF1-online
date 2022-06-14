import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilUsuario } from 'src/app/models/perfilUsuario';
import { AuthService } from 'src/app/service/auth.service';
import { ErrorService } from 'src/app/service/error.service';
import { LeaderboardCardService, positionInfo } from 'src/app/service/leaderboard-card.service';
import { LeaderboardService } from 'src/app/service/leaderboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hasTeam1: boolean;

  showJoinModal:boolean = false;
  showNotificationModal:boolean;
  perfil:PerfilUsuario;
  hasNotifications = false;
  publicLeaderboardInfo:positionInfo = new positionInfo();
  privateLeaderboardInfo:positionInfo = new positionInfo();

  showCreateLeague:boolean = false;

  constructor(
    public authService: AuthService,
    private router:Router,
    public leaderboardCardService: LeaderboardCardService,
    public leaderboardService: LeaderboardService,
    private errorService:ErrorService
  ) { }

  async ngOnInit() {
    this.showNotificationModal = false;
    this.errorService.showLoading();
    this.perfil = this.authService.perfilUsuario;
    this.hasTeam1 = this.authService.perfilUsuario.Teams[0].Racing_Team_Name != null;
    this.authService.hasNotifications().then(res=>{
      this.hasNotifications = res;
    });
    this.publicLeaderboardInfo = await this.leaderboardCardService.getPublicLeagueInfo() as positionInfo;
    if(this.leaderboardService.privateLeagueID != ''){
      this.privateLeaderboardInfo = await this.leaderboardCardService.getPrivateLeagueInfo() as positionInfo;
    }

    this.leaderboardService.getPrivateLeagueInfo().then(async (res)=>{
      if(res){
        this.privateLeaderboardInfo.hasLeaderboard = true;
        this.leaderboardService.privateLeagueID = res.Unique_Key;

        if(this.leaderboardService.privateLeagueID != ''){
          console.log(this.leaderboardService.privateLeagueID);
          this.privateLeaderboardInfo = await this.leaderboardCardService.getPrivateLeagueInfo() as positionInfo;
          this.privateLeaderboardInfo.hasLeaderboard = true;
        }
      }else if (res == null){
        this.privateLeaderboardInfo.hasLeaderboard = false;
      }
      this.errorService.hideLoading();
    })
  }

  toPublicLeague(){
    this.router.navigateByUrl('/user/leaderboard')
  }

  logout(){
    this.router.navigateByUrl('/user/login')
  }

  toPrivateLeague(){
    this.router.navigateByUrl('/user/privateLeague')
  }
  closeJoinModal(){
    this.showJoinModal = false;
  }

  closeNotificationModal(){
    this.showNotificationModal = false;
  }

  closeCreateLeague(created){
    this.showCreateLeague = false;
    if(created){
      console.log('Cerrando ciclos');
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/user/perfil']));
    }
  }

  openCreate(){
    this.showCreateLeague = true;
  }

  openJoin(){
    this.showJoinModal = true;
  }

}
