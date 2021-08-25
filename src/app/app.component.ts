import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
 
  nome;

  alterarNome(evento){
    console.log(evento.target.value)
    this.nome = evento.target.value
  }

  adicionar(nome){
    console.log(nome)
    console.log("Adicionando...")
  }

 
}