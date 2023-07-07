import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.component.html',
  styleUrls: ['./produto-view.component.css']
})
export class ProdutoViewComponent implements OnInit {

  display: boolean = false;

  index: number = 0;

  abaSelected = "Lista de Produtos";

  constructor() { }

  ngOnInit(): void {
  }


  openNext() {
    this.index = (this.index === 4) ? 0 : this.index + 1;
  }

  showAba(event: any) {
    this.abaSelected = event.target.innerText;
  }

  abrirModal(){
    this.display = true;
  }

  fecharModal(){
    this.display = false;
  }

}
