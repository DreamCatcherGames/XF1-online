import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RestService } from './rest.service';

describe('AuthService', () => {
  let service: AuthService;

  let fakeRestService: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
