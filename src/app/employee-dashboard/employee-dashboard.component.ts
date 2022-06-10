import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getemployee();
  }

  getemployee() {
    // alert("hi");
    // console.log(shopprofile1);
    this.http.get('http://localhost/VERTEX-PHP-API/employee/employeedashboard')
          .subscribe(res => {
          
          }, (err) => {
         console.log(err);
        });
      
        
      }

}
