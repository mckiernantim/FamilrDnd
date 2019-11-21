import { TestBed } from '@angular/core/testing';

import { NoUndeadService } from './no-undead.service';

describe('NoUndeadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoUndeadService = TestBed.get(NoUndeadService);
    expect(service).toBeTruthy();
  });
});
