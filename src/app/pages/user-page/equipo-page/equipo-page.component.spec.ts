import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { PerfilUsuario } from 'src/app/models/perfilUsuario';
import { AuthService } from 'src/app/service/auth.service';

import { EquipoPageComponent } from './equipo-page.component';

describe('EquipoPageComponent', () => {
  let component: EquipoPageComponent;
  let fixture: ComponentFixture<EquipoPageComponent>;

  let fakeRouter: Router;
  let fakeAuthService:AuthService;

  beforeEach(async () => {

    fakeRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);
    fakeAuthService = jasmine.createSpyObj<AuthService>('AuthService', {perfilUsuario:new PerfilUsuario});

    await TestBed.configureTestingModule({
      declarations: [ EquipoPageComponent ],
      providers: [{provide: Router, useValue: fakeRouter}, {provide:AuthService, useValue: fakeAuthService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
