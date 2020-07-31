import { TestBed } from '@angular/core/testing';

import { NumberTableService } from './number-table.service';

describe('NumberTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberTableService = TestBed.get(NumberTableService);
    expect(service).toBeTruthy();
  });
});
