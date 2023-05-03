import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    AppRoutingModule,
    SidenavModule,
  ],exports:[
    HomeComponent
  ],
})
export class HomeModule { }
