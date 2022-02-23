import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ExcelImportComponent } from './components/excel-import/excel-import.component';
import { StudentpredictionComponent } from './components/studentprediction/studentprediction.component';

import { PrivatepredictionComponent } from './components/privateprediction/privateprediction.component';
import { FormComponent } from './components/form/form.component';

import { AboutComponent } from './components/about/about.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HomeComponent } from './home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

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
      path:'studentprediction',
      component: StudentpredictionComponent
     },
     {
      path:'excel-import',
      component: ExcelImportComponent
     },
     {
      path:'edit-user',
      component: EditUserComponent
     },
     {
       path:'user-profile',
       component: UserProfileComponent
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
