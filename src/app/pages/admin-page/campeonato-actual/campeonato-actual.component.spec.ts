import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoActualComponent } from './campeonato-actual.component';

describe('CampeonatoActualComponent', () => {
  let component: CampeonatoActualComponent;
  let fixture: ComponentFixture<CampeonatoActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeonatoActualComponent ]
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
});
