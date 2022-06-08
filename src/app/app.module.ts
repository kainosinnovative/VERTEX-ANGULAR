import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

import { LogintestComponent } from './logintest/logintest.component';
import { AuthService } from './services/auth.service';
import {FormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogintestComponent,
   
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
     MatInputModule,
    MatCardModule,
    MatRadioModule,
    FormsModule
    // MatButtonModule
],                
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
