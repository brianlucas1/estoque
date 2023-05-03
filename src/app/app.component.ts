import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';



interface SideNavToggle{
  screenWidth: number;
  collapsed:  boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideContent',[
        state('open',style ({
          transform:'translateX(270px)'
        })),
        state('closed',style ({
          transform:'translateX(0)'
        })),
        transition('open <=> closed',
        animate('200ms  ease-in-out'))
    ])
   ],
})
export class AppComponent {
  title = 'app-estoque';

  open = true;
  isSideNavCollapsed =  false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }




  isOpen(){
    console.log(this.open)
  }

}
