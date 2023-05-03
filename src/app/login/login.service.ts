import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginForm } from './fazLogin/fazloginForm';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private loginService: HttpClient,
    private router : Router) { }



  autenticar(loginForm: LoginForm): Observable<any>{
    return this.loginService.post('http://localhost:8081/api/auth',loginForm);
  }


}
