import { TestBed } from '@angular/core/testing';

import { UndeadService } from './undead.service';

describe('UndeadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UndeadService = TestBed.get(UndeadService);
    expect(service).toBeTruthy();
  });
});
