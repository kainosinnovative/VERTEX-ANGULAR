import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-vendor-mgmt',
  templateUrl: './vendor-mgmt.component.html',
  styleUrls: ['./vendor-mgmt.component.scss']
})
export class VendorMgmtComponent implements OnInit {

 constructor() { }

  ngOnInit(): void {}


  Userdata(){

  let user_name = (<HTMLInputElement>document.getElementById("user_name")).value;
  let vendor_type = (<HTMLInputElement>document.getElementById("vendor_type")).value;
  let Legal_business = (<HTMLInputElement>document.getElementById("business_name")).value;
  let federal = (<HTMLInputElement>document.getElementById("federal")).value;
  let physical_address = (<HTMLInputElement>document.getElementById("physical_address")).value;
  let state_province = (<HTMLInputElement>document.getElementById("state_province")).value;
  let city = (<HTMLInputElement>document.getElementById("city")).value;
  let zip_code = (<HTMLInputElement>document.getElementById("zip_code")).value;
  let county = (<HTMLInputElement>document.getElementById("county")).value;
  let country = (<HTMLInputElement>document.getElementById("country")).value;
  let trade_name = (<HTMLInputElement>document.getElementById("trade_name")).value;
  let duns_no = (<HTMLInputElement>document.getElementById("trade_name")).value;
  let mailing_address = (<HTMLInputElement>document.getElementById("mailing_address")).value;
  let state_province1 = (<HTMLInputElement>document.getElementById("state_province1")).value;
  let city_1 = (<HTMLInputElement>document.getElementById("city_1")).value;
  let zip_code1 = (<HTMLInputElement>document.getElementById("zip_code1")).value;
  let county_1 = (<HTMLInputElement>document.getElementById("county_1")).value;
  let country_1 = (<HTMLInputElement>document.getElementById("country_1")).value;
  let business_website = (<HTMLInputElement>document.getElementById("business_website")).value;
  let contact_name = (<HTMLInputElement>document.getElementById("contact_name")).value;
  let business_phone = (<HTMLInputElement>document.getElementById("business_phone")).value;
  let title = (<HTMLInputElement>document.getElementById("title")).value;
  let business_email = (<HTMLInputElement>document.getElementById("business_email")).value;


      if(user_name == ""){
        (document.getElementById('errormessage') as HTMLFormElement).innerHTML = "Enter the User Name";
        (document.getElementById('errormessage') as HTMLFormElement).focus();
      }
      else if(vendor_type == ""){

        (document.getElementById('errormessage1') as HTMLFormElement).innerHTML = "Select Vendor Type";
        (document.getElementById('errormessage1') as HTMLFormElement).focus();
      }

      else if(Legal_business == ""){
        (document.getElementById('errormessage2') as HTMLFormElement).innerHTML = "Enter the Legal Business Name";
        (document.getElementById('errormessage2') as HTMLFormElement).focus();
      }
      else if(federal == ""){
        (document.getElementById('errormessage3') as HTMLFormElement).innerHTML = "Enter the Federal EIN";
        (document.getElementById('errormessage3') as HTMLFormElement).focus();
      }
      else if(physical_address == ""){
        (document.getElementById('errormessage4') as HTMLFormElement).innerHTML = "Enter the Physical Address";
        (document.getElementById('errormessage4') as HTMLFormElement).focus();
      }
      else if(state_province == ""){
        (document.getElementById('errormessage5') as HTMLFormElement).innerHTML = "Select state_province";
        (document.getElementById('errormessage5') as HTMLFormElement).focus();
      }
      else if(city == ""){
        (document.getElementById('errormessage6') as HTMLFormElement).innerHTML = "Enter the City";
        (document.getElementById('errormessage6') as HTMLFormElement).focus();
      }
      else if(zip_code == ""){
        (document.getElementById('errormessage7') as HTMLFormElement).innerHTML = "Enter the Zip Code";
        (document.getElementById('errormessage7') as HTMLFormElement).focus();
      }
      else if(county == ""){
        (document.getElementById('errormessage8') as HTMLFormElement).innerHTML = "Enter the County";
        (document.getElementById('errormessage8') as HTMLFormElement).focus();
      }
      else if(country == ""){
        (document.getElementById('errormessage9') as HTMLFormElement).innerHTML = "Enter the Country";
        (document.getElementById('errormessage9') as HTMLFormElement).focus();
      }
      else if(trade_name == ""){
        (document.getElementById('errormessage10') as HTMLFormElement).innerHTML = "Enter your Trade Name";
        (document.getElementById('errormessage10') as HTMLFormElement).focus();
      }
      else if(duns_no == ""){
        (document.getElementById('errormessage11') as HTMLFormElement).innerHTML = "Enter the DUNS Number";
        (document.getElementById('errormessage11') as HTMLFormElement).focus();
      }
      else if(mailing_address == ""){
        (document.getElementById('errormessage12') as HTMLFormElement).innerHTML = "Enter the Mailing Address";
        (document.getElementById('errormessage12') as HTMLFormElement).focus();
      }
      else if(state_province1 == ""){
        (document.getElementById('errormessage13') as HTMLFormElement).innerHTML = "Select State/Province";
        (document.getElementById('errormessage13') as HTMLFormElement).focus();
      }
      else if(city_1 == ""){
        (document.getElementById('errormessage14') as HTMLFormElement).innerHTML = "Enter the City";
        (document.getElementById('errormessage14') as HTMLFormElement).focus();
      }
      else if(zip_code1 == ""){
        (document.getElementById('errormessage15') as HTMLFormElement).innerHTML = "Enter the Zip Code";
        (document.getElementById('errormessage15') as HTMLFormElement).focus();
      }
      else if(county_1 == ""){
        (document.getElementById('errormessage16') as HTMLFormElement).innerHTML = "Enter the County";
        (document.getElementById('errormessage16') as HTMLFormElement).focus();
      }
      else if(country_1 == ""){
        (document.getElementById('errormessage17') as HTMLFormElement).innerHTML = "Enter the Country";
        (document.getElementById('errormessage17') as HTMLFormElement).focus();
      }
      else if(business_website == ""){
        (document.getElementById('errormessage18') as HTMLFormElement).innerHTML = "Enter the Business Website";
        (document.getElementById('errormessage18') as HTMLFormElement).focus();
      }
      else if(contact_name == ""){
        (document.getElementById('errormessage19') as HTMLFormElement).innerHTML = "Enter your Contact Person Name";
        (document.getElementById('errormessage19') as HTMLFormElement).focus();
      }
      else if(business_phone == ""){
        (document.getElementById('errormessage20') as HTMLFormElement).innerHTML = "Enter the Business Phone";
        (document.getElementById('errormessage20') as HTMLFormElement).focus();
      }
      else if(title == ""){
        (document.getElementById('errormessage20') as HTMLFormElement).innerHTML = "Enter the Title";
        (document.getElementById('errormessage20') as HTMLFormElement).focus();
      }
      else if(business_email == ""){
        (document.getElementById('errormessage21') as HTMLFormElement).innerHTML = "Enter the Title";
        (document.getElementById('errormessage21') as HTMLFormElement).focus();
      }
}

EmptyErrorMessage(errormessage: any) {
  //   // alert("hi");
    (document.getElementById(errormessage) as HTMLFormElement).innerHTML = "";
    // (document.getElementById(errormessage1) as HTMLFormElement).innerHTML = "";
   
  }

  
Displayvendortype(){

  let vendor_details = (<HTMLInputElement>document.getElementById("vendor_type")).value;
  //  alert(vendor_details);

  if(vendor_details == "business"){
//  alert("hi");
    (<HTMLInputElement>document.getElementById("vendor_business")).style.display ="block";
    (<HTMLInputElement>document.getElementById("vendor_individual")).style.display ="none";
    
  }
  else{

    // alert("test");
    (<HTMLInputElement>document.getElementById("vendor_individual")).style.display ="block";
    (<HTMLInputElement>document.getElementById("vendor_business")).style.display ="none";
    
  }

}
 

}


