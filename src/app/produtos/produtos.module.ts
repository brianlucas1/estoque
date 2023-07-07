import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CardModule } from 'primeng/card';

import { ProdutoViewComponent } from './produto-view/produto-view.component';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng-lts/button';
import {DialogModule} from 'primeng-lts/dialog';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';
import { CategoriasCadastroComponent } from './categorias-cadastro/categorias-cadastro.component';




@NgModule({
  declarations: [
    ProdutosListaComponent,
     ProdutosCadastroComponent,
     ProdutoViewComponent,
     CategoriasListaComponent,
     CategoriasCadastroComponent,
    ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    CardModule,
    DialogModule,
    ButtonModule,
    TableModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
  ],exports:[

  ]
})
export class ProdutosModule { }
