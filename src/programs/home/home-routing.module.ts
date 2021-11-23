import { AboutComponent } from './components/about/about.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { NavbarComponent } from 'src/programs/home/components/navbar/navbar.component';
import { HomeComponent } from './home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
   path: '',
   component: HomeComponent ,
   children: [
     {
      path:'about',
      component:AboutComponent
     },
     {
      path:'dashbord',
      component:DashbordComponent
     },
     {
       path:'**',
       component:DashbordComponent
     }
   ]
 },
//  {
//   path: '' , redirectTo: 'login' , pathMatch: 'full'
// },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
