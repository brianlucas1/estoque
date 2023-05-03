import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './fazLogin/fazlogin.component';
import { BrowserModule } from '@angular/platform-browser';
import { FazCadastroComponent } from './faz-cadastro/faz-cadastro.component';


@NgModule({
  declarations: [
    LoginComponent,
    FazCadastroComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],exports:[
    LoginComponent,
    FazCadastroComponent
  ]
})
export class LoginModule {


 }


