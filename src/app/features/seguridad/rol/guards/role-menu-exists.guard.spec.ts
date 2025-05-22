import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleMenuExistsGuard } from './role-menu-exists.guard';

describe('roleMenuExistsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleMenuExistsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
