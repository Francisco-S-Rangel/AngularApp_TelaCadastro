import { TestBed } from '@angular/core/testing';

import { ServidorCadastroService } from './servidor-cadastro.service';

describe('ServidorCadastroService', () => {
  let service: ServidorCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServidorCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
