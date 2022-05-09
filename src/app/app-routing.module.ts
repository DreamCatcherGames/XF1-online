import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m)=>m.PagesModule)
    /**component: PagesComponent,
    children: [
      {
        path: 'admin', 
        loadChildren: ()=> import('./pages/admin-page/admin-page.module').then((m)=>m.AdminPageModule)
      }
     ]**/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
