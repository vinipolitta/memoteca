import { Component, OnInit } from '@angular/core';
import { PensamentosService } from 'src/app/services/pensamentos.service';
import { Pensamento } from '../pensamento.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private pensamentosServices: PensamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buscarPensamentoPorId();
  }

  buscarPensamentoPorId() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentosServices.buscarPensamentoPorId(parseInt(id!)).subscribe(res => {
      this.pensamento = res;
    })
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.pensamentosServices.excluirPensamentos(this.pensamento.id).subscribe(res => {
        this.router.navigateByUrl('listar-pensamento');
      });
    }
  }

  cancelar() {
    this.router.navigateByUrl('listar-pensamento');

  }
}
