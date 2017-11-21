import { TestBed, inject } from '@angular/core/testing';

import { ModalDlgService } from './modal-dlg.service';

describe('ModalDlgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalDlgService]
    });
  });

  it('should be created', inject([ModalDlgService], (service: ModalDlgService) => {
    expect(service).toBeTruthy();
  }));
});
