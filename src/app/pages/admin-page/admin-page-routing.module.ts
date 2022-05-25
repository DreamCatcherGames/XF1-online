import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { CampeonatoActualComponent } from './campeonato-actual/campeonato-actual.component';
import { InfoCarreraComponent } from './info-carrera/info-carrera.component';
import { LoginComponent } from './login/login.component';
import { CampeonatoComponent } from './campeonato/campeonato.component';
import { HistoricoCampeonatosComponent } from './historico-campeonatos/historico-campeonatos.component';
import { AdminGuard } from 'src/app/service/guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path:'campeonato-actual',
        //canActivate:[AdminGuard],
        component:CampeonatoActualComponent
      },{
        path:'campeonato/:champId',
        canActivate:[AdminGuard],
        component:CampeonatoComponent
      },
      {
        path:'info-carrera/:carreraId/:nombre/:pais',
        canActivate:[AdminGuard],
        component:InfoCarreraComponent
      },
      {
        path: 'historico',
        canActivate:[AdminGuard],
        component:HistoricoCampeonatosComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'',
        redirectTo: 'login',
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
