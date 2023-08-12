import { TestBed } from '@angular/core/testing';

import { ConsultantService } from './consultant.service';

describe('ConsultantService', () => {
  let service: ConsultantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
