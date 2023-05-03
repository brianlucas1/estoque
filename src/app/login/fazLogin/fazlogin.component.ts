import { Component, OnInit } from '@angular/core';
import { LoginForm } from './fazloginForm';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './fazlogin.component.html',
  styleUrls: ['./fazlogin.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  email:string
  senha:string

  constructor(
    private loginService:LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    )  {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null,Validators.required],
      senha: [null,Validators.required],
    })
  }


  fazerLogin(){
    let loginForm = this.loginForm.getRawValue() as LoginForm;
    console.log("fazendo login")
    this.loginService.autenticar(loginForm)
      .subscribe(response  => {
        this.loginForm = response;
        console.log(this.loginForm );
       this.router.navigate(['home'])
      },
        (error) =>{
            alert('Email ou senha invalidos, tente novamente!')
            console.log(error)
        }
      );

    }
  }

