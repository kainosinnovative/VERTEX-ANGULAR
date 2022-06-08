import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogintestComponent } from './logintest/logintest.component';
const routes: Routes = [
  { path:'', component:LoginComponent, data: { title: 'login'}},
  { path:'LogintestComponent', component:LogintestComponent, data: { title: 'LogintestComponent'}},
  // path:'',
  // loadChildren:() => import('./logintest/logintest.module').then(_ => _.LoginModule)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
