import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ButtonModule} from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DashbordComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    RippleModule,
    CardModule,
    ChartModule
  ]
})
export class HomeModule { }
