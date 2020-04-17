import { TestBed } from '@angular/core/testing';

import { TutorSignupService } from './tutor-signup.service';

describe('TutorSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorSignupService = TestBed.get(TutorSignupService);
    expect(service).toBeTruthy();
  });
});
