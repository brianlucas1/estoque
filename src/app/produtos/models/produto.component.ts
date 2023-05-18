import { CategoriaProduto } from "./categoria-produto.component";

export class Produto{

  id:number;
  descricaoProduto:string;
  descricaoReduziada:string;
  quantidade:number;
  categoria:CategoriaProduto;
  codBarras:number;
  marca:string;
  valorProduto:number;
  dataCadastro: Date;
  dataAtualizacao: Date;

}
