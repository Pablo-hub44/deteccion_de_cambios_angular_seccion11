import { TestBed } from '@angular/core/testing';

import { MesaggesService } from './mesagges.service';

describe('MesaggesService', () => {
  let service: MesaggesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesaggesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
