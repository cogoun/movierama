import { TestBed } from '@angular/core/testing';

import { CurrentUserChangedService } from './current-user-changed.service';

describe('CurrentUserChangedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentUserChangedService = TestBed.get(CurrentUserChangedService);
    expect(service).toBeTruthy();
  });
});
