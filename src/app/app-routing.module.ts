import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogintestComponent } from './logintest/logintest.component';
import { AuthGuard } from "./services/auth.guard";
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  { path:'login', component:LoginComponent, data: { title: 'login'}},
  { path:'LogintestComponent', component:LogintestComponent, data: { title: 'LogintestComponent'}},
  { path:'SigninComponent', component:SigninComponent, data: { title: 'SigninComponent'}},
  // path:'',
  // loadChildren:() => import('./logintest/logintest.module').then(_ => _.LoginModule)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
