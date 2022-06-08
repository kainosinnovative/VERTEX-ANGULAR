import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogintestComponent } from './logintest.component';
import { LoginRouteModules } from './logintest-route.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LogintestComponent],
  imports: [
    CommonModule,
    FormsModule,
   MatInputModule,
   MatFormFieldModule,
   MatButtonModule,
    LoginRouteModules
  ]
})
export class LogintestModule { }
