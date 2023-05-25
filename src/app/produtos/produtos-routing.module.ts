import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutosCadastroComponent } from "./produtos-cadastro/produtos-cadastro.component";
import { ProdutosListaComponent } from "./produtos-lista/produtos-lista.component";
import { ProdutoViewComponent } from "./produto-view/produto-view.component";


const routes: Routes = [
  {
    path: 'cadastro',
    component: ProdutosCadastroComponent
  },
  {
    path: 'view',
    component: ProdutoViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProdutosRoutingModule{}
