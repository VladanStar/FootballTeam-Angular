import { TestBed } from '@angular/core/testing';

import { TrainerDetailsService } from './trainer-details.service';

describe('TrainerDetailsService', () => {
  let service: TrainerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
