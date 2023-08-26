import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services/calculadora.service';
import { By } from '@angular/platform-browser';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      providers: [CalculadoraService]
    });
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 3+2=5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  })



  it('deve garantir que (4*2+4)/3 = 4', () => {
    let btn4 = fixture.debugElement.query(By.css('#btn4'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btnMultiplicacao = fixture.debugElement.query(By.css('#btnMultiplicacao'));
    let btnDivisao = fixture.debugElement.query(By.css('#btnDivisao'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMultiplicacao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDivisao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('4');
  })

  it('deve garantir que 3 + 2 = 5; - 1 deve ser igual a 4', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btn1 = fixture.debugElement.query(By.css('#btn1'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btnSubtracao = fixture.debugElement.query(By.css('#btnSubtracao'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSubtracao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();


    expect(display.nativeElement.value).toEqual('4');
  })


});
