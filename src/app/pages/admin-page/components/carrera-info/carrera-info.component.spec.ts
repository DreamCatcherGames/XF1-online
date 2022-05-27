import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraInfoComponent } from './carrera-info.component';

describe('CarreraInfoComponent', () => {
  let component: CarreraInfoComponent;
  let fixture: ComponentFixture<CarreraInfoComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ CarreraInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
