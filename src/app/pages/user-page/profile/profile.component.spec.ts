import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { PerfilUsuario } from 'src/app/models/perfilUsuario';
import { Piloto } from 'src/app/models/piloto';
import { AuthService } from 'src/app/service/auth.service';

import { ProfileComponent } from './profile.component';

class FakeAuthService extends AuthService {
  override perfilUsuario:PerfilUsuario={

	Teams:[
    new Equipo(),
    new Equipo()
  ],
	Username:'',
	Country:'',
	First_Name:'',
	Last_Name:'',
	Email:'',
	Money:0,
	Encrypted_Password:'',
	Salt:'',
	Token:'',
	Active:true
  };
}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  let fakeRouter: Router;
  let fakeAuthService: AuthService;

  beforeEach(async () => {
    fakeRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl'])
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: [{provide: Router, useValue: fakeRouter},{provide:AuthService, useClass: FakeAuthService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
