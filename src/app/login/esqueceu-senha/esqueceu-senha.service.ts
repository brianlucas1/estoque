import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

  const urlBackEnd= "http://localhost:8081/"

@Injectable({
  providedIn: 'root'
})
export class EsqueceuSenhaService {

  constructor(
    private loginService: HttpClient,
    private router : Router) { }



  resetarSenha(email: string): Observable<any>{
    return this.loginService.post(urlBackEnd + 'api/auth', email);
  }


}
