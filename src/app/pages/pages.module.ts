import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponentsModule } from './admin-page/components/admin-components.module';
import { FormsModule } from '@angular/forms';
import { VerificacionComponent } from './verificacion/verificacion.component';

@NgModule({
  declarations: [
    PagesComponent,
    VerificacionComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    AdminComponentsModule,
    FormsModule
  ]
})
export class PagesModule { }
