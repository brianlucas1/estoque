import { Component, OnInit } from '@angular/core';


interface SideNavToggle{
  screenWidth: number;
  collapsed:  boolean
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
