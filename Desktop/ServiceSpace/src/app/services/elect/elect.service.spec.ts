import { TestBed } from '@angular/core/testing';

import { ElectService } from './elect.service';

describe('ElectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectService = TestBed.get(ElectService);
    expect(service).toBeTruthy();
  });
});
