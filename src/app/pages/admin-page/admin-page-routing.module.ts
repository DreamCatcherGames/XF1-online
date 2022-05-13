import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { CampeonatoActualComponent } from './campeonato-actual/campeonato-actual.component';
import { InfoCarreraComponent } from './info-carrera/info-carrera.component';
import { LoginComponent } from './login/login.component';
import { CampeonatoComponent } from './campeonato/campeonato.component';
import { HistoricoCampeonatosComponent } from './historico-campeonatos/historico-campeonatos.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path:'campeonato-actual',
        component:CampeonatoActualComponent
      },{
        path:'campeonato/:champId',
        component:CampeonatoComponent
      },
      {
        path: 'historico',
        component:HistoricoCampeonatosComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'info-carrera',
        component:InfoCarreraComponent
      },
      {
        path:'',
        redirectTo: 'campeonato-actual',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
