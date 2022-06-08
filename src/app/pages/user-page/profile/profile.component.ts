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

  showJoinModal:boolean = true;
  perfil:PerfilUsuario;

  constructor(
    public authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.perfil = this.authService.perfilUsuario;
    this.hasTeam1 = this.authService.perfilUsuario.Teams[0].Racing_Team_Name != null;
  }

  logout(){
    this.router.navigateByUrl('/user/login')
  }

  closeJoinModal(){
    this.showJoinModal = false;
  }

}
