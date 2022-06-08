import { TestBed } from '@angular/core/testing';

import { LeaderboardCardService } from './leaderboard-card.service';

describe('LeaderboardCardService', () => {
  let service: LeaderboardCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderboardCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
