import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // Faking service 
  let fakeRouter:Router;
  let fakeFb:FormBuilder;
  let fakeAuthService:AuthService;

  let mockFormGroup:FormGroup;

  const fakeProfile = {
    Username: 'rootAdmin',
    Role: 'Admin',
    Password: 'admin1234',
    Salt:'abcd',
    Token:'abcd'
  };

  beforeEach(async () => {
    // creating fakes
    fakeRouter = jasmine.createSpyObj<Router>(
      'Router',
      {
        navigateByUrl:undefined,
      }
    );

    mockFormGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
    fakeFb = jasmine.createSpyObj<FormBuilder>(
      'FormBuilder',
      {
        group: mockFormGroup
      }
    );

    fakeAuthService = jasmine.createSpyObj<AuthService>(
      'AuthService',
      {
        loginRequest:new Promise((resolve, reject) => {
          resolve(fakeProfile);
        }),
        setPerfil:undefined
      }
    )

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: Router, useValue: fakeRouter},
        {provide: FormBuilder, useValue: fakeFb},
        {provide: AuthService, useValue: fakeAuthService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function setValidFormData(){
    mockFormGroup.setValue(
      {
        email: 'test@test.com',
        password: 'test1234'
      }
    )
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call rest when formData is invalid', ()=>{
    // Act
    component.onSubmit();
    // Expect
    expect(fakeAuthService.loginRequest).not.toHaveBeenCalled();
  });

  it('should call rest when formData is valid', () => {
    // Act
    setValidFormData();
    component.onSubmit();
    // Expect
    expect(fakeAuthService.loginRequest).toHaveBeenCalled();
  })

  it('should update profile after form submission', fakeAsync(() => {
    setValidFormData();
    component.onSubmit();
    tick();

    expect(fakeAuthService.setPerfil).toHaveBeenCalled();
  }));

  it('should navigate to campeonato actual after succesful submission', fakeAsync(() => {
    // Act
    setValidFormData();
    component.onSubmit();
    tick();
    // Expect
    expect(fakeRouter.navigateByUrl).toHaveBeenCalled();
  }));

});
