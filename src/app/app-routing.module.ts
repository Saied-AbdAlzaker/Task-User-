import { ListUserComponent } from './listUser/listUser.component';
import { AddUserComponent } from './addUser/addUser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'listUser',pathMatch:'full'},
  {path:'listUser',component:ListUserComponent},
  {path:'addUser',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
