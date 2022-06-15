import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule,FormGroup, Validators} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthInterceptor } from './services/authconfig.interceptor';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { VendordetailComponent } from './vendordetail/vendordetail.component';
import { VendorMgmtComponent } from './vendor-mgmt/vendor-mgmt.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeDashboardComponent,
    VendordetailComponent,
    VendorMgmtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
 } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
