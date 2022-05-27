import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserPageRoutingModule } from './user-page-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EquipoPageComponent } from './equipo-page/equipo-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EquipoCardComponent } from './components/equipo-card/equipo-card.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    UserPageComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    EquipoCardComponent,
    EquipoPageComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserPageModule { }
