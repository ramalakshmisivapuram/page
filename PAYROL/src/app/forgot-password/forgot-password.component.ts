import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  AdminforgotForm = this.fa.group({
    oldpassword: [null,Validators.required,Validators.minLength(6),Validators.maxLength(8)],
    newpassword: [null,Validators.required,Validators.minLength(6),Validators.maxLength(8)],
    confirmpassword: [null,Validators.required,Validators.minLength(6),Validators.maxLength(8)]

  });
  
  constructor(private fa: FormBuilder) {}


  ngOnInit() {
  }
}
