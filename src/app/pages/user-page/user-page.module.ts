import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserPageRoutingModule } from './user-page-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { EquipoPageComponent } from './equipo-page/equipo-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EquipoCardComponent } from './components/equipo-card/equipo-card.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './login/login.component';
import { JoinLeagueComponent } from './components/join-league/join-league.component';
import { NotificationCenterComponent } from './components/notification-center/notification-center.component';
import { NewPrivateComponent } from './components/new-private/new-private.component';
import { LeaderboardCardComponent } from './components/leaderboard-card/leaderboard-card.component';

@NgModule({
  declarations: [
    UserPageComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    EquipoCardComponent,
    EquipoPageComponent,
    RegistroComponent,
    LeaderboardComponent,
    LoginComponent,
    JoinLeagueComponent,
    NotificationCenterComponent,
    NewPrivateComponent,
    LeaderboardCardComponent
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class UserPageModule { }
