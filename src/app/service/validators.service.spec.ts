import { TestBed } from '@angular/core/testing';

import { CustomValidatorsService } from './custom-validators.service';

describe('ValidatorsService', () => {
  let service: CustomValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
