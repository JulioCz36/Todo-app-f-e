import { TestBed } from '@angular/core/testing';

import { TareasListService } from './tareas-list.service';

describe('TareasListService', () => {
  let service: TareasListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
