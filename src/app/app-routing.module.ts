import { ListUserComponent } from './listUser/listUser.component';
import { AddUserComponent } from './addUser/addUser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'listUser',pathMatch:'full'},
  {path:'listUser',component:ListUserComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'update',component:AddUserComponent},
  {path:'save',component:ListUserComponent},
  {path:'user',component:UserComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
