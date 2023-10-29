import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  valorAtual:string = '';
  valorSalvo:string = '';
  isMouseOver:boolean = false;

  botaoClicado() {
    alert('Hello there!!');
  }

  onKeyUp(evento:KeyboardEvent) {
    //console.log(evento); //mostra letra por letra no console
    //console.log((<HTMLInputElement>evento.target).value) // mostra o ultimo valor concatenado
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor:any) {
    this.valorSalvo = ((<HTMLInputElement>valor.target).value);
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
