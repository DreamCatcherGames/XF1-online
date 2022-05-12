import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoInfoComponent } from './campeonato-info.component';

describe('CampeonatoInfoComponent', () => {
  let component: CampeonatoInfoComponent;
  let fixture: ComponentFixture<CampeonatoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeonatoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
