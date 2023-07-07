import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CadastroServiceService } from './cadastro-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroForm } from './cadastroForm';
import {MessageService } from 'primeng/api';


@Component({
  selector: 'app-faz-cadastro',
  templateUrl: './faz-cadastro.component.html',
  styleUrls: ['./faz-cadastro.component.css'],
  providers: [MessageService],
})
export class FazCadastroComponent implements OnInit {

  cadastroForm:FormGroup;
  usuario:string;
  email:string;
  senha:string;

  sucess: boolean = false;
  confirmSenha:string;

  erros: String[];


  constructor(
    private router : Router,
    private cadastroService:CadastroServiceService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      usuario: [null,Validators.required],
      email: [null,Validators.required],
      senha: [null,Validators.required],
      senhaConfirm: [null,Validators.required]
    })
  }


  fazerCadastro(){
    if(!this.cadastroForm.invalid){

      let cadastroForm = this.cadastroForm.getRawValue() as CadastroForm;
      this.cadastroService.fazCadastro(cadastroForm)
        .subscribe(response  => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Cadastro efeutado com sucesso.', life: 3000 });
          this.router.navigate(['login'])
        },
        errorResponse =>{
          console.log(errorResponse.error)
          this.sucess = false;
          this.erros = errorResponse.error;
          this.limpaCampos()
        });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Ação Negada!', detail: 'Campos Inválidos.', life: 3000 })
        return;
      }
  }

  limpaCampos(){
    this.cadastroForm.reset();
  }

  }

