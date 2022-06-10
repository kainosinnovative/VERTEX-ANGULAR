import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Inject, Injectable} from  '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl,FormArray} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  dataForm: any;
 //dialog: any;
  // @Input() logindetails = { mobno:''}

  constructor( 
      public router: Router,
  private http: HttpClient,private frmbuilder: FormBuilder) {


  }

  ngOnInit(): void {
    // const mobilePattern = "^((\\+91-?)|0)?[0-9]{10}$";
    this.dataForm = this.frmbuilder.group({
      mobile: ['', Validators.required],
      loginfor: ['', Validators.required],
      // mobile:['', [Validators.required, Validators.pattern(mobilePattern)]],
     
      // loginfor:[localStorage.getItem('loginfor'),null]
     
      });
  }

  sendotp1(dataForm: any) {

  }

}
