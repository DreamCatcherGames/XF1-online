import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CampeonatoService } from 'src/app/service/campeonato.service';
import { CustomValidatorsService } from 'src/app/service/custom-validators.service';

import { NuevoCampeonatoComponent } from './nuevo-campeonato.component';

describe('NuevoCampeonatoComponent', () => {
  let component: NuevoCampeonatoComponent;
  let fixture: ComponentFixture<NuevoCampeonatoComponent>;

  let fakeFb: FormBuilder;
  let fakeCustomValidatorsService:CustomValidatorsService;
  let fakeCampeonatoService:CampeonatoService;

  let mockFormGroup:FormGroup;

  beforeEach(async () => {
    mockFormGroup = new FormGroup(
      {
        name: new FormControl('', Validators.required), 
        startDatetime: new FormControl('', Validators.required),
        endDatetime : new FormControl('', Validators.required),
        rules: new FormControl('', Validators.required)
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

    await TestBed.configureTestingModule({
      declarations: [ NuevoCampeonatoComponent ],
      providers: [
        {provide: FormBuilder, useValue: fakeFb},
        {provide: CustomValidatorsService, useValue: fakeCustomValidatorsService},
        {provide: CampeonatoService, useValue: fakeCampeonatoService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call the rest if the form is invalid', () => {
    component.onSubmit();
    expect(fakeCampeonatoService.createNewCampeonato).not.toHaveBeenCalled();
  });

});
