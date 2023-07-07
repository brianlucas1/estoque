import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './fazLogin/fazlogin.component';

import { FazCadastroComponent } from './faz-cadastro/faz-cadastro.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';


@NgModule({
  declarations: [
    LoginComponent,
    FazCadastroComponent,
    EsqueceuSenhaComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    BlockUIModule.forRoot(),
    ReactiveFormsModule,
  ],exports:[
    LoginComponent,
    FazCadastroComponent
  ]
})
export class LoginModule {


 }


