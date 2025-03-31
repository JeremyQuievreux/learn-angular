import { TestBed } from '@angular/core/testing';

import { CapitalizedInterceptor } from './capitalized.interceptor';

describe('CapitalizedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CapitalizedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CapitalizedInterceptor = TestBed.inject(CapitalizedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
