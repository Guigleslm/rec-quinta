import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numero1!: number;
  numero2!: number;
  resultado!: any;
  operacao: string = '';

  adicao() {
    this.operacao = '+';
  }

  subtracao() {
    this.operacao = '-';
  }

  multiplicacao() {
    this.operacao = '*';
  }

  divisao() {
    this.operacao = '/';
  }

  calculate() {
    if (this.numero1 !== undefined && this.numero2 !== undefined && this.operacao) {
      switch (this.operacao) {
        case '+':
          this.resultado = this.numero1 + this.numero2;
          break;
        case '-':
          this.resultado = this.numero1 - this.numero2;
          break;
        case '*':
          this.resultado = this.numero1 * this.numero2;
          break;
        case '/':
          if (this.numero2 !== 0) {
            this.resultado = this.numero1 / this.numero2;
          }
          break;
        default:
          this.resultado = undefined;
      }
    }
  }
}