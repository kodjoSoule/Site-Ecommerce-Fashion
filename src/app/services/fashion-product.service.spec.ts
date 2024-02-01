import { TestBed } from '@angular/core/testing';

import { FashionProductService } from './fashion-product.service';

describe('FashionProductService', () => {
  let service: FashionProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
