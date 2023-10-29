import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit{

  url:string = 'http://google.com';
  cursoAngular:boolean = true;
  urlImagem:string = 'assets/animais-robos-e-espioes.jpeg';
  urlImagem2:string = 'assets/animais-robos-e-espioes-2.jpeg';
  urlImagem3:string = 'assets/animais-robos-e-espioes-3.jpeg';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {

  }

  ngOnInit(): void {

  }

}
