import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EquipoPageComponent } from './equipo-page/equipo-page.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page.component';

const routes: Routes = [
    {
      path: '',
      component: UserPageComponent,
      children: [
        {
          path:'login',
          component: LoginComponent
        },{
          path:'perfil',
          component:ProfileComponent,
        },{
          path:'equipo',
          component:EquipoPageComponent
        },
        {
          path:'',
          redirectTo: 'equipo',
          pathMatch: 'full'
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserPageRoutingModule { }