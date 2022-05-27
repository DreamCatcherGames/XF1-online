import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CarreraService } from 'src/app/service/carrera.service';

import { InfoCarreraComponent } from './info-carrera.component';

describe('InfoCarreraComponent', () => {
  let component: InfoCarreraComponent;
  let fixture: ComponentFixture<InfoCarreraComponent>;

  let fakeActivatedRoute: ActivatedRoute;
  let fakeCarreraService: CarreraService;

  beforeEach(async () => {

    fakeActivatedRoute = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute',
      ['snapshot']
    );
    fakeCarreraService = jasmine.createSpyObj<CarreraService>('CarreraService',
      ['getCarrera']
    )

    await TestBed.configureTestingModule({
      declarations: [ InfoCarreraComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: CarreraService, useValue: fakeCarreraService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
