import { TestBed } from '@angular/core/testing';

import { SaleOnlineService } from './sale-online.service';

describe('SaleOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleOnlineService = TestBed.get(SaleOnlineService);
    expect(service).toBeTruthy();
  });
});
