import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CampeonatoService } from 'src/app/service/campeonato.service';

import { HistoricoCampeonatosComponent } from './historico-campeonatos.component';

describe('HistoricoCampeonatosComponent', () => {
  let component: HistoricoCampeonatosComponent;
  let fixture: ComponentFixture<HistoricoCampeonatosComponent>;

  // Fakes
  let fakeCampeonatoService: CampeonatoService;
  let fakeRouter: Router;


  beforeEach(async () => {

    fakeRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);
    fakeCampeonatoService = jasmine.createSpyObj<CampeonatoService>('CampeonatoService', ['getAllButCurrent']);

    await TestBed.configureTestingModule({
      declarations: [ HistoricoCampeonatosComponent ],
      providers: [
        {provide:CampeonatoService, useValue: fakeCampeonatoService},
        {provide:Router, useValue: fakeRouter}
      ]
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

  it('should redirect when clicking go to inicial', ()=>{
    component.goToInicial();

    expect(fakeRouter.navigateByUrl).toHaveBeenCalledWith('/admin/campeonato-actual');
  });
});
