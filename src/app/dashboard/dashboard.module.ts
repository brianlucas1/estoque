import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule,
  ],exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
