import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

import { LogintestComponent } from './logintest/logintest.component';
import { AuthService } from './services/auth.service';
import {FormsModule,FormGroup, Validators} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './services/authconfig.interceptor';
import { SigninComponent } from './signin/signin.component';
import { TestComponent } from './test/test.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogintestComponent,
    SigninComponent,
    TestComponent,
    EmployeeDashboardComponent,
   
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    // MatFormFieldModule,
     MatInputModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule
    // MatButtonModule
],                
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
