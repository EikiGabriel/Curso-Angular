import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
 nome: string = 'Eiki';
 age: number = 30;
 job = 'Programador';
 hobbie = ['Correr', 'Jogar', 'Estudar'];
 car = {
  nome: 'Polo',
  year: 2019
 }

 


 
}
