import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [null,Validators.required],
    password: [null,Validators.required]
  });
    username: string;
    password: string;
    formGroup: any;
  
  constructor(private fb: FormBuilder, private router:Router) {}
  
  onSubmit() {
   
    if (this.loginForm.invalid) {
      return;
   }
   this.router.navigate(['reset'])
   alert(" Employee login successfully");
  }
  ngOnInit() {
    
    
  }

}
