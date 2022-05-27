import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { PerfilUsuario } from 'src/app/models/perfilUsuario';
import { AuthService } from 'src/app/service/auth.service';

import { LeaderboardComponent } from './leaderboard.component';

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

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;

  let fakeRouter: Router;

  beforeEach(async () => {

    fakeRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [ LeaderboardComponent ],
      providers: [{provide: Router, useValue: fakeRouter},{provide:AuthService, useClass:FakeAuthService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
