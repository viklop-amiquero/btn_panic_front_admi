import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noEditAdmiGuard } from './no-edit-admi.guard';

describe('noEditAdmiGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noEditAdmiGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
