import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FazCadastroComponent } from './login/faz-cadastro/faz-cadastro.component';
import { LoginComponent } from './login/fazLogin/fazlogin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent },
  {path:'home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
