import { PrivatepredictionComponent } from './components/privateprediction/privateprediction.component';
import { FormComponent } from './components/form/form.component';

import { AboutComponent } from './components/about/about.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HomeComponent } from './home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './components/help/help.component';

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
      path:'help',
      component: HelpComponent
     },
     {
      path:'form',
      component: FormComponent
     },
     {
      path:'privateprediction',
      component: PrivatepredictionComponent
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
