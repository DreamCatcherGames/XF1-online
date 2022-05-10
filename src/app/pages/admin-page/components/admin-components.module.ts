import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { CampeonatoInfoComponent } from './campeonato-info/campeonato-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
	  FooterComponent,
	  HeaderComponent,
	  CampeonatoInfoComponent,
  ],
  imports: [
	 SharedModule,
	 CommonModule,
  ],
  exports:[
	  FooterComponent,
	  HeaderComponent,
	  CampeonatoInfoComponent
  ]
})
export class AdminComponentsModule { }
