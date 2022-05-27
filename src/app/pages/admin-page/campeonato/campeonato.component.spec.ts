import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { CampeonatoService } from 'src/app/service/campeonato.service';

import { CampeonatoComponent } from './campeonato.component';

describe('CampeonatoComponent', () => {
  let component: CampeonatoComponent;
  let fixture: ComponentFixture<CampeonatoComponent>;

  let fakeCampeonatoService: CampeonatoService;
  let fakeRouter: Router;
  let fakeActivatedRoute: ActivatedRoute;

  beforeEach(async () => {

    fakeCampeonatoService = jasmine.createSpyObj<CampeonatoService>('CampeonatoService',
      ['getRaces', 'getCampeonato']
    );
    fakeRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);
    fakeActivatedRoute = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute',
      ['snapshot']
    )
    
    await TestBed.configureTestingModule({
      declarations: [ CampeonatoComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: Router, useValue: fakeRouter},
        {provide: CampeonatoService, useValue: fakeCampeonatoService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatoComponent);
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
