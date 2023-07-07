import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  @Output() display = new EventEmitter();

  cadastroProdutoForm:FormGroup


  constructor(
    private formBuilder: FormBuilder,
  ) {
   }

  ngOnInit(): void {

    this.cadastroProdutoForm = this.formBuilder.group({
      id:[''],
      descricaoProduto:[''],
      qtdProduto:[''],
      categoriaProduto:[''],
      codBarras:[''],
      marcaProduto:[''],
      valorProduto:['']
    })
  }


  salvar(){

  }

  voltar(){
    this.display.emit(false);
    this.cadastroProdutoForm.reset();
  }

}
