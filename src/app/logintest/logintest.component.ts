import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-logintest',
  templateUrl: './logintest.component.html',
  styleUrls: ['./logintest.component.scss']
})
export class LogintestComponent implements OnInit {
  loginForm = {
    username: '',
    password: '',
  };
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  userLogin() {
    // alert(this.loginForm.username);
    this.authService.userLogin(this.loginForm)
    .subscribe(
    (value) => {
     if(value){
      alert('success');
     }else{
      alert('failed');
     }
     },
    (error)=>{
    alert('failed error');
     }
    );
}
  }
