import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { CampeonatoActualComponent } from './campeonato-actual/campeonato-actual.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    CampeonatoActualComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule
  ]
})
export class AdminPageModule { }
