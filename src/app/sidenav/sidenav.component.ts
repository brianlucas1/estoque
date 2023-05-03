import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';

import { navBarData } from './nav-data';


interface SideNavToggle{
  screenWidth: number;
  collapsed:  boolean
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent  implements OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth= 0;
  navData = navBarData;
  @Input() isOpen: false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }


}
