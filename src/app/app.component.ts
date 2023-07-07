import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



interface SideNavToggle{
  screenWidth: number;
  collapsed:  boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  constructor(private router: Router){

  }
  title = 'app-estoque';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  showSideBar(){
    const urlAtual = this.router.url;

    if(urlAtual.startsWith("/login") || urlAtual.startsWith("/cadastro")  || urlAtual.startsWith("/esqueceuSenha") ){
      return false;
    }
    return true;
  }

}
