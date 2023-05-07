import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento.model';
import { PensamentosService } from 'src/app/services/pensamentos.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(
    private router: Router,
    private pensamentosService: PensamentosService
  ) { }

  ngOnInit(): void {
    this.getPensamentos()

  }

  public criarPensamento() {
    this.router.navigateByUrl('criar-pensamento');
  }

  getPensamentos() {
    this.pensamentosService.getPensamentos().subscribe((res) => {
      this.listaPensamentos = res,
        console.log(this.listaPensamentos);

    });
  }
}
