import { TestBed } from '@angular/core/testing';

import { ParamsUrlService } from './params-url.service';

describe('ParamsUrlService', () => {
  let service: ParamsUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamsUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
