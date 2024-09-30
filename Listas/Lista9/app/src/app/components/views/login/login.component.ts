import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email!: string;
  public senha!: string;

  public login() {
    if(!this.email || !this.senha) {
      alert("Preencha os campos");
    } else {
      alert("Login realizado!");
    }
  }
}