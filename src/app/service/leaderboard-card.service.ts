import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { RestService } from './rest.service';
import Swal from 'sweetalert2';
import { LeaderboardService } from './leaderboard.service';

export class positionInfo {
  position:number;
  leaguePlayerCount:number;
}

@Injectable({
  providedIn: 'root'
})
export class LeaderboardCardService {

  privateLeagueID:string = '';
  positionPublic:positionInfo;
  positionprivate:positionInfo;

  constructor(
    private restService:RestService,
    private authService:AuthService,
    private leaderboardService: LeaderboardService
  ) { }

    async getPublicLeagueInfo(){
      const httpResponse:positionInfo = await this.restService.get('League/getPlayerPos/Public/' +this.authService.perfilUsuario.Token+'/'+this.authService.perfilUsuario.Salt).then(response=>{
        return response.json();
      });

      const response:positionInfo={
        position: httpResponse.position,
        leaguePlayerCount: httpResponse.leaguePlayerCount
      }

      this.positionPublic = response;

      return response
    }

    async getPrivateLeagueInfo(){
      const httpResponse:positionInfo = await this.restService.get('League/getPlayerPos/'+this.leaderboardService.privateLeagueID+ '/' +this.authService.perfilUsuario.Token+'/'+this.authService.perfilUsuario.Salt).then(response=>{
        return response.json();
      });

      const response:positionInfo={
        position: httpResponse.position,
        leaguePlayerCount: httpResponse.leaguePlayerCount
      }

      this.positionprivate = response;

      return response
    }

}
