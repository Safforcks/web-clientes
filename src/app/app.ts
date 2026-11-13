import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //Inicializar a bibilioteca HttpClient do angular
  private http = inject(HttpClient);

  //Função para armazenar os dados dos clientes obtidos
  clientes = signal<any[]>([]);

  // Função executada sempre que o componente é inicializado
  ngOnInit() {
    // Fazendo uma requisição HTTP GET para a URL de consultas de clientes
    this.http.get("http://localhost:8080/api/v1/clientes").subscribe((clientes) => {
      // Imprimindo os clientes obtidos no console do navegador
      this.clientes.set(clientes as any[])
    });
  }

  //Formulário para cadastro de clientes
  formCadastro = new FormGroup({
    nome: new FormControl("", [Validators.required, Validators.minLength(6)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    cpf: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
    telefone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{11}$/)])
  });

  //Função para realizar o cadastro do cliente
  cadastrarCliente() {
    console.log(this.formCadastro.value);
  }
}
