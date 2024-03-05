import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css'],
})
export class SegundoComponenteComponent {
  nome = 'Leonardo';
  dataNascimento = '1985-04-26';
  urlImagem = '/assets/Leo Nascimento.png';

  mostrarDataNascimento() {
    alert(
      `A data de nascimento do Leonardo Nascimneto é: ${this.dataNascimento}`
    );
  }
}
