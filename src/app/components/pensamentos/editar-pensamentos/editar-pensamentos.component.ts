import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentosService } from 'src/app/services/pensamentos.service';

@Component({
  selector: 'app-editar-pensamentos',
  templateUrl: './editar-pensamentos.component.html',
  styleUrls: ['./editar-pensamentos.component.scss']
})
export class EditarPensamentosComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }
  id: number;

  constructor(
    private pensamentosServices: PensamentosService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(id!)
    this.buscarPorId();
  }

  buscarPorId() {
    this.pensamentosServices.buscarPensamentoPorId(this.id).subscribe(res => {
      this.pensamento = res
    });
  }

  editarPensamento() {
    this.pensamentosServices.editarPensamentos(this.pensamento).subscribe(() => {
      this.router.navigateByUrl('listar-pensamento')
    })
  }

  cancelar() {
    this.router.navigateByUrl('listar-pensamento')

  }
}
