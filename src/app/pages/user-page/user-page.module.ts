import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserPageRoutingModule } from './user-page-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EquipoPageComponent } from './equipo-page/equipo-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserPageComponent,
    HeaderComponent,
    FooterComponent,
    EquipoPageComponent
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    SharedModule
  ]
})
export class UserPageModule { }
