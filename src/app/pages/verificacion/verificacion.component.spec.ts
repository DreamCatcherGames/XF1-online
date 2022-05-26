import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/service/error.service';
import { RestService } from 'src/app/service/rest.service';

import { VerificacionComponent } from './verificacion.component';

describe('VerificacionComponent', () => {
  let component: VerificacionComponent;
  let fixture: ComponentFixture<VerificacionComponent>;

  // Fakes
  let fakeRestService:RestService;
  let fakeErrorService:ErrorService;
  let fakeActivatedRoute:ActivatedRoute;

  beforeEach(async () => {

    fakeRestService = jasmine.createSpyObj<RestService>('RestService', ['post']);
    fakeErrorService = jasmine.createSpyObj<ErrorService>('ErrorService', ['handle','showLoading'])
    fakeActivatedRoute = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute',
      ['snapshot']
    )

    await TestBed.configureTestingModule({
      declarations: [ VerificacionComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
       { provide: ErrorService, useValue:fakeErrorService },
       {provide: RestService, useValue:fakeRestService} 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
