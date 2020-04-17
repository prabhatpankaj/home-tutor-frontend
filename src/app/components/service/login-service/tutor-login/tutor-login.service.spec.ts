import { TestBed } from '@angular/core/testing';

import { TutorLoginService } from './tutor-login.service';

describe('TutorLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorLoginService = TestBed.get(TutorLoginService);
    expect(service).toBeTruthy();
  });
});
