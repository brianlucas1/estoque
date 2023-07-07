import { CategoriaProduto } from "./categoria-produto.component";

export class Produto{

  id:number;
  descricaoProduto:string;
  qtdProduto:number;
  categoriaProduto:CategoriaProduto;
  codBarras:number;
  marcaProduto:string;
  valorProduto:number;
  dataCadastro: Date;
  dataAtualizacao: Date;

}
