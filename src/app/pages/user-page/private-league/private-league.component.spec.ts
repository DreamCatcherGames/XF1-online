import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { PrivateLeagueComponent } from './private-league.component';

describe('PrivateLeagueComponent', () => {
  let component: PrivateLeagueComponent;
  let fixture: ComponentFixture<PrivateLeagueComponent>;
  let fakeRouter: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateLeagueComponent ],
      providers: [{provide: Router, useValue: fakeRouter}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
