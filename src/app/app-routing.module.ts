import { AuthGuard } from './auth.guard';

import { TemplateComponent } from './../programs/template/template.component';
import { TemplateModule } from './../programs/template/template.module';
import { HomeModule } from './../programs/home/home.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes ,CanActivate} from '@angular/router';
import { HomeComponent } from 'src/programs/home/home.component';

import { LoginComponent } from 'src/programs/login/login.component';



export const routes: Routes = [

  {
    path: ''
    ,  loadChildren: () =>
       import('../programs/login/login.module').then(
             (m) => m.LoginModule
           ),
  },
  {
    path: 'home' ,
    loadChildren:() =>
      import('../programs/home/home.module').then(
        (m) => m.HomeModule
      ),
      canActivate:[AuthGuard]
  },
  {
    path: 'admin' ,
    loadChildren:() =>
      import('../programs/admin/admin.module').then(
        (m) => m.AdminModule
      ),
      canActivate:[AuthGuard]
  }
  // {path: '' , component: LoginComponent}
  // { path: 'admin', component: AdminComponent },
  // {
  //   path: 'template',
  //   component: TemplateComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [RoleGuard],
  //   data: {
  //     expectedRole: 'admin'
  //   }
  // },
  // { path: '**', redirectTo: '' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
