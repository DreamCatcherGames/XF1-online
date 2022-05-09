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
		  }
		] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
