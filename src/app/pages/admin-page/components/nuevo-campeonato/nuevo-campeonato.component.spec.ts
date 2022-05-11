import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCampeonatoComponent } from './nuevo-campeonato.component';

describe('NuevoCampeonatoComponent', () => {
  let component: NuevoCampeonatoComponent;
  let fixture: ComponentFixture<NuevoCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCampeonatoComponent ]
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
});
