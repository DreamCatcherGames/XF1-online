import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { CampeonatoInfoComponent } from './campeonato-info/campeonato-info.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaCarrerasComponent } from './lista-carreras/lista-carreras.component';
import { CarreraCardComponent } from './carrera-card/carrera-card.component';

@NgModule({
  declarations: [
	  FooterComponent,
	  HeaderComponent,
	  CampeonatoInfoComponent,
   	  ListaCarrerasComponent,
      CarreraCardComponent,
  ],
  imports: [
	 SharedModule,
	 CommonModule,
	 FormsModule,
	 ReactiveFormsModule
  ],
  exports:[
	  FooterComponent,
	  HeaderComponent,
	  CampeonatoInfoComponent,
	  ListaCarrerasComponent
  ]
})
export class AdminComponentsModule { }
