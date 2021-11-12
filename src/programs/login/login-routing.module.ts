import { LoginComponent } from 'src/programs/login/login.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '' , redirectTo: 'login' , pathMatch: 'full'
  // },
  // {
  //   path:'login' , component:LoginComponent
  // },
  {
    path: '' , redirectTo: 'login' , pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
  // {
  //   path: '/' , component:LoginComponent
  // }
  // {
  //   path: '/home'
  //   // , component: TemplateComponent
  //   ,  loadChildren: () =>
  //      import('../home/home.module').then(
  //            (m) => m.HomeModule
  //          ),
  // }
  // { path: 'home' , component: HomeComponent } ,
  // { path: '**', redirectTo: '' }
  // {
  //   path:'login',
  //   component:LoginComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
