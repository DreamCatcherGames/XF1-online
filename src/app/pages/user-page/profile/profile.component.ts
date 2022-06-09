import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilUsuario } from 'src/app/models/perfilUsuario';
import { AuthService } from 'src/app/service/auth.service';
import { LeaderboardCardService, positionInfo } from 'src/app/service/leaderboard-card.service';
import { LeaderboardService } from 'src/app/service/leaderboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hasTeam1: boolean;

  perfil:PerfilUsuario;
  publicLeaderboardInfo:positionInfo = new positionInfo();
  privateLeaderboardInfo:positionInfo = new positionInfo();

  constructor(
    public authService: AuthService,
    private router:Router,
    public leaderboardCardService: LeaderboardCardService,
    public leaderboardService: LeaderboardService
  ) { }

  async ngOnInit() {
    this.perfil = this.authService.perfilUsuario;
    this.hasTeam1 = this.authService.perfilUsuario.Teams[0].Racing_Team_Name != null;
    this.publicLeaderboardInfo = await this.leaderboardCardService.getPublicLeagueInfo() as positionInfo;
    if(this.leaderboardService.privateLeagueID != ''){
      this.privateLeaderboardInfo = await this.leaderboardCardService.getPrivateLeagueInfo() as positionInfo;
    }
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
}
