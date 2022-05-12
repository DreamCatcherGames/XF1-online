import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCampeonatosComponent } from './historico-campeonatos.component';

describe('HistoricoCampeonatosComponent', () => {
  let component: HistoricoCampeonatosComponent;
  let fixture: ComponentFixture<HistoricoCampeonatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoCampeonatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoCampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
