import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { CampeonatoActualComponent } from './campeonato-actual/campeonato-actual.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CampeonatoInfoComponent } from './components/campeonato-info/campeonato-info.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    CampeonatoActualComponent,
    HeaderComponent,
    FooterComponent,
    CampeonatoInfoComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule
  ]
})
export class AdminPageModule { }
