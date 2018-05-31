import { TestBed, inject } from '@angular/core/testing';

import { ProblemViewService } from './problem-view.service';

describe('ProblemViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemViewService]
    });
  });

  it('should be created', inject([ProblemViewService], (service: ProblemViewService) => {
    expect(service).toBeTruthy();
  }));
});
