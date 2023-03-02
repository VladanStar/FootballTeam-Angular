import { TestBed } from '@angular/core/testing';

import { PlayersDetailService } from './players-detail.service';

describe('PlayersDetailService', () => {
  let service: PlayersDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
