import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { CampeonatoInfoComponent } from './campeonato-info/campeonato-info.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaCarrerasComponent } from './lista-carreras/lista-carreras.component';
import { CarreraCardComponent } from './carrera-card/carrera-card.component';
import { NuevoCampeonatoComponent } from './nuevo-campeonato/nuevo-campeonato.component';
import { NuevaCarreraComponent } from './nueva-carrera/nueva-carrera.component';
import { CarreraInfoComponent } from './carrera-info/carrera-info.component';
import { ListaCampeonatosComponent } from './lista-campeonatos/lista-campeonatos.component';
import { CampeonatoCardComponent } from './campeonato-card/campeonato-card.component';

@NgModule({
  declarations: [
	  FooterComponent,
	  HeaderComponent,
	  CampeonatoInfoComponent,
   	  ListaCarrerasComponent,
      CarreraCardComponent,
      NuevoCampeonatoComponent,
      NuevaCarreraComponent,
      CarreraInfoComponent,
      ListaCampeonatosComponent,
      CampeonatoCardComponent,
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
	  ListaCarrerasComponent,
	  NuevoCampeonatoComponent,
	  NuevaCarreraComponent,
	  CarreraInfoComponent,
	  ListaCampeonatosComponent,
	  CampeonatoCardComponent
  ]
})
export class AdminComponentsModule { }
