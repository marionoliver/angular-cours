import { TestBed } from '@angular/core/testing';

import { SallesService } from './salles.service';

describe('SallesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SallesService = TestBed.get(SallesService);
    expect(service).toBeTruthy();
  });
});
