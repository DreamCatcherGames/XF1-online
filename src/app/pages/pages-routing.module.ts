import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
	  path: '',
	  component: PagesComponent,
	  children:[
		  {
			  path:'admin',
			  loadChildren: () => import('./admin-page/admin-page.module').then((m)=>m.AdminPageModule)
		  },
		  {
			  path:'user',
			  loadChildren: () => import('./user-page/user-page.module').then((m)=>m.UserPageModule)
		  },
		  {
			  path:'',
			  redirectTo: 'user',
			  pathMatch: 'full'
		  }
		] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
