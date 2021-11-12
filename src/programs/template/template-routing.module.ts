import { TemplateComponent } from './template.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '' , redirectTo: '/template', pathMatch: 'full'
  },{
    path:'template' , component: TemplateComponent , children: [
      {path: 'home' ,component: HomeComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
