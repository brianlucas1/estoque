import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroForm } from './cadastroForm';

const API_URL = 'http://localhost:8081/api/usuario'
const CREATE = '/create'

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {



  constructor(
    private cadastroService: HttpClient,
    private router : Router) { }


    fazCadastro(cadastro: CadastroForm){
      console.log('chamando service')
      console.log(cadastro)
      return this.cadastroService.post<CadastroForm>(API_URL+CREATE,cadastro)
    }

  }

