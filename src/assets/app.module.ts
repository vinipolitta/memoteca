import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from '../app/app.component';
import { CabecalhoComponent } from '../app/componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from '../app/componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from '../app/componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from '../app/componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from '../app/componentes/pensamentos/pensamento/pensamento.component';
import { ExcluirPensamentoComponent } from '../app/componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from '../app/componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { BotaoCarregarMaisComponent } from '../app/componentes/pensamentos/listar-pensamento/botao-carregar-mais/botao-carregar-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent,
    BotaoCarregarMaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
