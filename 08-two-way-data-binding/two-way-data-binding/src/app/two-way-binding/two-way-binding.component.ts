import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  //Ex-4 - TWO WAY DATA BINDING
  pessoa:any = {
    name: 'Dagberto',
    graduate: 'Engenharia de Computação',
    dateDiplome: 2017,
    end: {
      rua: 'Rosa Massuqueto',
      num: 210,
      bairro: 'Sítio Cercado',
      cidade:'Curitiba'
    }
  };


  //Ex-4 - TWO WAY DATA BINDING
  fourexp:string = '';

  //Ex-3
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  //Ex-2
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }

  //Ex-1
  name:string = 'test';

}
