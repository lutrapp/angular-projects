import { CalculadoraService } from './../services/calculadora.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  private num1: string;
  private num2: string;
  private resultado: number;
  private parcial: number;
  private operacao: string;

  constructor(
    private calculadoraService: CalculadoraService
    ){}

    ngOnInit(){
      this.limpar();
    }

    limpar(): void {
      this.num1 = '0';
      this.num2 = null;
      this.resultado = null;
      this.operacao = null;
    }

    adicionarNumero(numero: string): void {
      if(this.operacao === null) {
        this.num1 = this.concatenaNumero(this.num1, numero);
      }else {
        this.num2 = this.concatenaNumero(this.num2, numero);
      }
    }

    definirOperacao(operacao: string): void {
      let xpto = this.num1;
      if(this.operacao === null) {
        this.operacao = operacao;
        return;
      }

      if(this.num2 != null) {
        let proximaOperacao = operacao;
        this.resultado = this.calculadoraService.calcular(
          parseFloat(this.num1),
          parseFloat(this.num2),
          this.operacao)
          this.num1 = this.resultado.toString();
          this.num2 = null;
          this.resultado = null;

          this.operacao = proximaOperacao;
      }
    }

    calcular(): void {
      if(this.num2 === null){
        return;
      }
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operacao);
    }

    get display(): string {
      if (this.resultado != null) {
        return this.resultado.toString();
      }
      if(this.num2 != null) {
        return this.num2;
      }
      return this.num1;
    }

    concatenaNumero(numAtual: string, numConcat: string): string {
      if(numAtual ==='0' || numAtual ===null){
        numAtual = '';
      }
      if(numConcat ==='.' && numAtual === ''){
        return '0.';
      }
      if(numConcat ==='.' && numAtual.indexOf('.') > -1){
        return numAtual;
      }
      return numAtual + numConcat;

    }



}
