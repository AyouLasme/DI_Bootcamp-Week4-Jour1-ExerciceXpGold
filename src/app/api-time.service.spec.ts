import { TestBed } from '@angular/core/testing';

import { ApiTimeService } from './api-time.service';

describe('ApiTimeService', () => {
  let service: ApiTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
