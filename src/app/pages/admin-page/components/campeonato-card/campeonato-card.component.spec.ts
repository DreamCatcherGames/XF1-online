import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoCardComponent } from './campeonato-card.component';

describe('CampeonatoCardComponent', () => {
  let component: CampeonatoCardComponent;
  let fixture: ComponentFixture<CampeonatoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeonatoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
