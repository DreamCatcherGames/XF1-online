import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page.component';

const routes: Routes = [
    {
      path: '',
      component: UserPageComponent,
      children: [
        {
          path:'login',
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