import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;

  let fakeRouter:Router;
  let fakeAuthService: AuthService;
  
  beforeEach(async () => {

    fakeRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);
    fakeAuthService = jasmine.createSpyObj<AuthService>('AuthService', 
      {
        perfil:true
      }
    );
    
    await TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: fakeRouter},
        {provide: AuthService, useValue: fakeAuthService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuard);
  });


});
