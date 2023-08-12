import { TestBed } from '@angular/core/testing';

import { JobSeekerService } from './job-seeker.service';

describe('JobSeekerService', () => {
  let service: JobSeekerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSeekerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
