import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CampeonatoService } from 'src/app/service/campeonato.service';
import { CarreraService } from 'src/app/service/carrera.service';
import { CustomValidatorsService } from 'src/app/service/custom-validators.service';

import { NuevaCarreraComponent } from './nueva-carrera.component';

describe('NuevaCarreraComponent', () => {
  let component: NuevaCarreraComponent;
  let fixture: ComponentFixture<NuevaCarreraComponent>;
  
  let fakeFb: FormBuilder;
  let fakeCustomValidatorsService:CustomValidatorsService;
  let fakeCarreraService:CarreraService;
  let fakeCampeonatoService:CampeonatoService;

  let mockFormGroup:FormGroup;

  beforeEach(async () => {
    mockFormGroup = new FormGroup(
      {
        name: new FormControl('', Validators.required), 
        startDatetime: new FormControl('', Validators.required),
        endDatetime : new FormControl('', Validators.required),
        pais: new FormControl('', Validators.required),
        clasificatoriaDatetime: new FormControl('', Validators.required),
        competenciaDatetime: new FormControl('', Validators.required),
        nombrePista: new FormControl('', Validators.required),
        nombreCampeonato: new FormControl('', Validators.required),
      }
    );
    fakeFb = jasmine.createSpyObj<FormBuilder>('FormBuilder', {
      group: mockFormGroup
    })
    fakeCustomValidatorsService = jasmine.createSpyObj<CustomValidatorsService>('CustomValidatorsService', 
      ['dateValidation']
    )
    fakeCampeonatoService = jasmine.createSpyObj<CampeonatoService>('CampeonatoService',
      ['createNewCampeonato']
    );
    fakeCarreraService = jasmine.createSpyObj<CarreraService>('CarreraService',['createNewCarrera'])
    

    await TestBed.configureTestingModule({
      declarations: [ NuevaCarreraComponent ],
      providers: [
        {provide: FormBuilder, useValue: fakeFb},
        {provide: CustomValidatorsService, useValue: fakeCustomValidatorsService},
        {provide: CampeonatoService, useValue: fakeCampeonatoService},
        {provide: CarreraService, useValue: fakeCarreraService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
