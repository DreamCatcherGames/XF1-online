import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponentsModule } from './admin-page/components/admin-components.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    AdminComponentsModule
  ]
})
export class PagesModule { }
