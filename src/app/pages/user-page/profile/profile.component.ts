import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilUsuario } from 'src/app/models/perfilUsuario';
import { AuthService } from 'src/app/service/auth.service';

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

  constructor(
    public authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.showNotificationModal = true;
    this.perfil = this.authService.perfilUsuario;
    this.hasTeam1 = this.authService.perfilUsuario.Teams[0].Racing_Team_Name != null;
    this.authService.hasNotifications().then(res=>{
      this.hasNotifications = res;
    });
  }

  logout(){
    this.router.navigateByUrl('/user/login')
  }

  closeJoinModal(){
    this.showJoinModal = false;
  }

  closeNotificationModal(){
    this.showNotificationModal = false;
  }

}
