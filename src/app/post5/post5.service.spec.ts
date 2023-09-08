import { TestBed } from '@angular/core/testing';

import { Post5Service } from './post5.service';

describe('Post5tService', () => {
  let service: Post5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Post5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
