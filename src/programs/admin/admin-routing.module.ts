import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  // {
  //   path:'admin',
  //   component:AdminComponent,
  //   // กำหนด guard service ให้กับ canActivate ที่ root ของ module ย่อย
  //   canActivate: [AuthGuardService],
  // }
  {
    path:'',
    component:AdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
