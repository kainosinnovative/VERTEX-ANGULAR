import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogintestComponent } from './logintest.component';
 
const routes: Routes = [{
  path:'',
  component: LogintestComponent
}];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRouteModules {}