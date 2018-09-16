import { TestBed, inject } from '@angular/core/testing';

import { GetupdremService } from './getupdrem.service';

describe('GetupdremService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetupdremService]
    });
  });

  it('should be created', inject([GetupdremService], (service: GetupdremService) => {
    expect(service).toBeTruthy();
  }));
});
