import { Component, OnInit } from '@angular/core';
import { PerfilUsuario } from 'src/app/models/perfilUsuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hasTeam1: boolean = true;

  perfil:PerfilUsuario;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.perfil = this.authService.perfilUsuario;
  }

}
