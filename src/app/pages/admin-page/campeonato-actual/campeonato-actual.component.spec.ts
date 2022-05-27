import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CampeonatoService } from 'src/app/service/campeonato.service';
import { CampeonatoActualComponent } from './campeonato-actual.component';

describe('CampeonatoActualComponent', () => {
  let component: CampeonatoActualComponent;
  let fixture: ComponentFixture<CampeonatoActualComponent>;

  let fakeCampeonatoService:CampeonatoService;
  let fakeRouter: Router;

  beforeEach(async () => {
    fakeCampeonatoService = jasmine.createSpyObj<CampeonatoService>('CampeonatoService',
      ['getCurrentCampeonato']
    )
    fakeRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [ CampeonatoActualComponent ],
      providers: [
        {provide:CampeonatoService, useValue: fakeCampeonatoService},
        {provide:Router, useValue: fakeRouter}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to historico when clicking on historico', () => {
    component.showHistorico();

    expect(fakeRouter.navigateByUrl).toHaveBeenCalledWith('/admin/historico');
  })

});
