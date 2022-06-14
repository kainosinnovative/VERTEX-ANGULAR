import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { VendorMgmtComponent } from './vendor-mgmt/vendor-mgmt.component';

const routes: Routes = [
  { path:'', component:LoginComponent, data: { title: 'login'}},
  { path:'EmployeeDashboard', component:EmployeeDashboardComponent, data: { title: 'EmployeeDashboardComponent'}},
  { path: 'vendor-Mgmt', component:VendorMgmtComponent, data: { title: 'vendor'}},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
