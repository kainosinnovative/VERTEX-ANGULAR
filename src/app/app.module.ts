import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
// import {MatFormFieldModule }from '@angular/material/m'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
// import {MatButtonModule} from '@angular/material';
// import { MatRadioModule } from '@angular/material/radio';
import {MatRadioModule} from '@angular/material/radio';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
     MatInputModule,
    MatCardModule,
    MatRadioModule
    // MatButtonModule
],                
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
