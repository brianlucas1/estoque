import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CardModule } from 'primeng/card';




@NgModule({
  declarations: [
    ProdutosListaComponent,
     ProdutosCadastroComponent,
    ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    CardModule,
  ],exports:[

  ]
})
export class ProdutosModule { }
