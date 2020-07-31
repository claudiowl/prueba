import { TestBed } from '@angular/core/testing';

import { LetterTableService } from './letter-table.service';


describe('LetterTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LetterTableService = TestBed.get(LetterTableService);
    expect(service).toBeTruthy();
  });
});
