import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //Inicializar a bibilioteca HttpClient do angular
  private http = inject(HttpClient);

  // Função executada sempre que o componente é inicializado
  ngOnInit() {
    // Fazendo uma requisição HTTP GET para a URL de consultas de clientes
    this.http.get("http://localhost:8080/api/v1/clientes").subscribe((dados) => {
      // Imprimindo os clientes obtidos no console do navegador
      console.log(dados);
    });
  }
}
