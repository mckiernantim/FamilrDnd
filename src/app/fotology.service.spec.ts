import { TestBed } from '@angular/core/testing';

import { FotologyService } from './fotology.service';

describe('FotologyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FotologyService = TestBed.get(FotologyService);
    expect(service).toBeTruthy();
  });
});
