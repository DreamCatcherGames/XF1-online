import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RegistroService } from 'src/app/service/registro.service';

import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;



  // Faking service 
  let fakeFb:FormBuilder;
  let fakeRegistroService:RegistroService;


  beforeEach(async () => {

    fakeFb = jasmine.createSpyObj<FormBuilder>(
      'FormBuilder',
      {
        group: undefined
      }
    );

    fakeRegistroService = jasmine.createSpyObj<RegistroService>(
      'RegistroService',
      {
        createNewUser: undefined
      }
    )

    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      providers: [
        {provide: FormBuilder, useValue: fakeFb},
        {provide: RegistroService, useValue: fakeRegistroService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
