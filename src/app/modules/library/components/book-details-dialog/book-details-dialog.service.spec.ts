import { TestBed } from '@angular/core/testing';

import { BookDetailsDialogService } from './book-details-dialog.service';

describe('BookDetailsDialogService', () => {
  let service: BookDetailsDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDetailsDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
