import { TestBed } from '@angular/core/testing';

import { CoffeerequestService } from './coffeerequest.service';

describe('CoffeerequestService', () => {
  let service: CoffeerequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeerequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
