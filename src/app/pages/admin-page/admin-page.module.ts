import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { CampeonatoActualComponent } from './campeonato-actual/campeonato-actual.component';
import {AdminComponentsModule} from './components/admin-components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoricoCampeonatosComponent } from './historico-campeonatos/historico-campeonatos.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    CampeonatoActualComponent,
    HistoricoCampeonatosComponent,
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    AdminComponentsModule,
    SharedModule
  ]
})
export class AdminPageModule { }
