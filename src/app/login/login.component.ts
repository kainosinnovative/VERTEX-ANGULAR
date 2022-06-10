import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import'fa-icons';
// import { FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = {
    UserId: '',
    Password: '',
  };
  public invalidLogin: boolean = false;

  constructor(private toastr: ToastrService,private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
   
  }

  userLogin() {
    (<HTMLInputElement>document.getElementById("invalidid")).innerText = "";
    // alert("hi");
    // console.log(this.loginForm);
    // this.toastr.success('hi');
 

    this.http.post("http://localhost/VERTEX-PHP-API/"+'login/loginauth', this.loginForm).subscribe(
      
      data => {
          console.log('POST Request is successful >>>>>>>>', data);

      },
      success => {
          console.log('Error>>>>>', success.status);
          // if(success.status == 404) {
         
            
          // }
          
          if(success.status == 404) {
            let msg = success.error;
           
            // let text = "How are you doing today?";
const myArray = msg.split("message");
const secondArr = myArray[1].split(",");
let str = secondArr[0].substring(3);
var newStr = str.substring(0, str.length - 1);
console.log(newStr);
(document.getElementById('invalidid') as HTMLFormElement).innerHTML = newStr;
          }
          else {
            let msg3 = success.error.text;
// console.log(msg3);
// alert(msg3)
var msg4 = msg3.split("token");
// alert(msg4);
var msg5 = msg4[1].replace('"}}}', '');
var finaltoken = msg5.replace('":"', '');
var finaltoken1 = finaltoken.replace('"},"data":""}', '');
console.log("finaltoken1>>>",finaltoken1);
// alert(finaltoken)
this.parseJwt(finaltoken1);
localStorage.setItem('access_token', finaltoken1);
// alert(success.status);


            
  
          }
      }
    );

    
    
  }

  parseJwt (token:any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
	var data = JSON.parse(jsonPayload);
  this.router.navigate(['/EmployeeDashboard']);
  console.log("data>>>>",data);
  // localStorage.setItem("usertypeses", data['rolename']);
	// console.log("data>>>>",data['UserId']);
    // return JSON.parse(jsonPayload);
};

}
