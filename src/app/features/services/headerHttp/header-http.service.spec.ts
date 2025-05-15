import { TestBed } from '@angular/core/testing';

import { HeaderHttpService } from './header-http.service';

describe('HeaderHttpService', () => {
  let service: HeaderHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
