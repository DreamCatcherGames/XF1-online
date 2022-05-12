import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { CampeonatoActualComponent } from './campeonato-actual/campeonato-actual.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponentsModule } from './components/admin-components.module';
import { InfoCarreraComponent } from './info-carrera/info-carrera.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminPageComponent,
    CampeonatoActualComponent,
    LoginComponent,
    InfoCarreraComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    AdminComponentsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminPageModule { }
