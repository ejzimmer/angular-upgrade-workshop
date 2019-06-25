import { TestBed } from '@angular/core/testing';

import { JacketService } from './jacket.service';

describe('JacketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JacketService = TestBed.get(JacketService);
    expect(service).toBeTruthy();
  });
});
