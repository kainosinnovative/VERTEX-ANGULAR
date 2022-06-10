import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogintestComponent } from './logintest/logintest.component';
import { AuthGuard } from "./services/auth.guard";
import { SigninComponent } from './signin/signin.component';
import { TestComponent } from './test/test.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
const routes: Routes = [
  { path:'', component:LoginComponent, data: { title: 'login'}},
  { path:'LogintestComponent', component:LogintestComponent, data: { title: 'LogintestComponent'}},
  { path:'test', component:TestComponent, data: { title: 'TestComponent'}},
  { path:'EmployeeDashboard', component:EmployeeDashboardComponent, data: { title: 'EmployeeDashboardComponent'}},
  // path:'',
  // loadChildren:() => import('./logintest/logintest.module').then(_ => _.LoginModule)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
