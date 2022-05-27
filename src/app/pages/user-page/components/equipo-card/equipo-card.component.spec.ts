import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { EquipoCardComponent } from './equipo-card.component';

describe('EquipoCardComponent', () => {
  let component: EquipoCardComponent;
  let fixture: ComponentFixture<EquipoCardComponent>;

  let fakeRouter: Router;

  beforeEach(async () => {
    fakeRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);
    await TestBed.configureTestingModule({
      declarations: [ EquipoCardComponent ],
      providers: [{provide: Router, useValue: fakeRouter}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
