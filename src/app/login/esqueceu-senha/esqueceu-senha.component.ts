import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EsqueceuSenhaService } from './esqueceu-senha.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css'],
  providers: [MessageService],
})
export class EsqueceuSenhaComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  esqueseuSenhaForm:FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service :EsqueceuSenhaService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {

    this.esqueseuSenhaForm = this.formBuilder.group({
      email:[null,Validators.required]
    })
  }

  resetSenha(){

    let email = this.esqueseuSenhaForm.get("email").value;

    if(this.esqueseuSenhaForm.valid){

      this.blockUI.start("Validando E-mail");
      this.service.resetarSenha(email)
       .subscribe(

        response =>{
          this.blockUI.stop();
          this.messageService.add({ severity: 'success', summary: 'Confirmação!', detail: 'Nova senha enviada por E-mail.', life: 3000 })
        }
       )

    }else{

    }

  }

}
