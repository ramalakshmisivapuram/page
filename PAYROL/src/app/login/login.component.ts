import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/model';
import { LoginserviceService } from '../loginservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  submitted = false;
  AdminloginForm = this.fb.group({
      
      username: [null,Validators.required],
      password: [null,Validators.required]
    });
    
    constructor(private fb: FormBuilder,private router:Router,private loginservice:AuthenticationService) {}
    
    onSubmit() {
  if (this.AdminloginForm.invalid) {
        return;
  }
    
   alert(" Admin login successfully");
   this.router.navigate(['hr-details'])
    
}
    
    ngOnInit() {
      
      
    }
  }
