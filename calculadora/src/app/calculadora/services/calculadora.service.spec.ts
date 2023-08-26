import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 5 = 6', () => {
    let soma = service.calcular(1, 5, CalculadoraService.SOMA);
    expect(soma).toEqual(6);
  })

  it('deve garantir que 10 - 8 = 2', () => {
    let subtracao = service.calcular(10, 8, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(2);
  })

  it('deve garantir que 2 * -7 = -14', () => {
    let multiplicacao = service.calcular(2, -7, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(-14);
  })

  it('deve garantir que 24/ 4 = 6', () => {
    let divisao = service.calcular(24, 4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(6);
  })

});
