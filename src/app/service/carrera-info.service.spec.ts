import { TestBed } from '@angular/core/testing';

import { CarreraInfoService } from './carrera-info.service';

describe('CarreraInfoService', () => {
  let service: CarreraInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarreraInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
