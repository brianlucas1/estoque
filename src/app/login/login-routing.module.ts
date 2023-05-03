import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FazCadastroComponent } from './faz-cadastro/faz-cadastro.component';
import { LoginComponent } from './fazLogin/fazlogin.component';

const routes: Routes = [

  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'cadastro', component:FazCadastroComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
