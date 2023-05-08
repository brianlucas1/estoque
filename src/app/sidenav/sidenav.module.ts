import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HomeRoutingModule } from '../home/home-routing.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SublevelMenuComponent } from './sublevel-menu.component';



@NgModule({
  declarations: [SidenavComponent, SublevelMenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    AppRoutingModule,

  ],exports:[
    SidenavComponent
  ]
})
export class SidenavModule { }
