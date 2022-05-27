import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ListaCampeonatosComponent } from './lista-campeonatos.component';

describe('ListaCampeonatosComponent', () => {
  let component: ListaCampeonatosComponent;
  let fixture: ComponentFixture<ListaCampeonatosComponent>;

  let fakeRouter: Router;

  beforeEach(async () => {

    fakeRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [ ListaCampeonatosComponent ],
      providers: [{provide: Router, useValue: fakeRouter}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to specific campeonato when clicking a campeonato', ()=>{
    component.goToCampeonato({id:'abc'});

    expect(fakeRouter.navigateByUrl).toHaveBeenCalledWith('/admin/campeonato/abc');
  })

});
