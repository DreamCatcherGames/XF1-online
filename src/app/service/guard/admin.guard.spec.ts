import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;

  let fakeRouter:Router;
  let fakeActivatedRoute: ActivatedRoute;
  
  beforeEach(async () => {

    fakeRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);
    fakeActivatedRoute = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute',
      ['snapshot']
    );
    
    await TestBed.configureTestingModule({
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: Router, useValue: fakeRouter},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
