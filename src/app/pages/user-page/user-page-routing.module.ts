import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserPageComponent } from './user-page.component';

const routes: Routes = [
    {
      path: '',
      component: UserPageComponent,
      children: [
        {
          path:'login',
        },{
          path:'perfil',
          component:ProfileComponent 
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
  export class UserPageRoutingModule { }