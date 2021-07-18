import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { GetALLUserComponent } from './user/get-alluser/get-alluser.component';
import { GetUserComponent } from './user/get-user/get-user.component';

const routes: Routes = [
  { path:'',pathMatch:'full',component:LoginComponent},
  {path:'login',pathMatch:'full',component:LoginComponent},
  {path:'signup',pathMatch:'full',component:SignupComponent},
  {path:'getAllUser',pathMatch:'full',component:GetALLUserComponent},
  {path:'getUser',pathMatch:'full',component:GetUserComponent},
  {path:'**',pathMatch:'full',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
