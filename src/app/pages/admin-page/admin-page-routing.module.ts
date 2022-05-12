import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { CampeonatoActualComponent } from './campeonato-actual/campeonato-actual.component';
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
        path:'',
        redirectTo: 'historico',
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
