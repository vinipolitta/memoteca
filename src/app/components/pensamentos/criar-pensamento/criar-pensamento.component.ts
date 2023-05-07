import { PensamentosService } from 'src/app/services/pensamentos.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento.model';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent {

  constructor(
    private router: Router,
    private pensamentoService: PensamentosService,
  ) { }
  pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo3'
  }


  public criarPensamento() {
    this.pensamentoService.criarPensamentos(this.pensamento).subscribe(res => {
      this.router.navigateByUrl('listar-pensamento')
    })
  }

  public cancelar() {
    this.router.navigateByUrl('listar-pensamento')
  }
}
