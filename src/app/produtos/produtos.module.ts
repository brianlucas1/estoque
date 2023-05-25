import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CardModule } from 'primeng/card';

import { ProdutoViewComponent } from './produto-view/produto-view.component';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ProdutosListaComponent,
     ProdutosCadastroComponent,
     ProdutoViewComponent,
    ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    CardModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
  ],exports:[

  ]
})
export class ProdutosModule { }
