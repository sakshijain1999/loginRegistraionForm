import { TestBed } from '@angular/core/testing';

import { FakeBackendProviderInterceptor } from './fake-backend-provider.interceptor';

describe('FakeBackendProviderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FakeBackendProviderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FakeBackendProviderInterceptor = TestBed.inject(FakeBackendProviderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
