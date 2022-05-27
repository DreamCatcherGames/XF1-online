import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { UserPageComponent } from './user-page.component';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  let fakeRouter:Router;

  beforeEach(async () => {

    fakeRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [ UserPageComponent ],
      providers: [{provide: Router, useValue: fakeRouter}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
