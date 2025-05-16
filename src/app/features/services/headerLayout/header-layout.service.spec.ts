import { TestBed } from '@angular/core/testing';

import { HeaderLayoutService } from './header-layout.service';

describe('HeaderLayoutService', () => {
  let service: HeaderLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
