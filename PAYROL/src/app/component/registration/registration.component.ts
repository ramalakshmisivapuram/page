import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  AdminregistrationForm= this.fa.group({
    empid: [null,Validators.required,Validators.minLength(6),Validators.maxLength(8)],
    role: [null,Validators.required,Validators.minLength(6),Validators.maxLength(8)],
    password:[null,Validators.required,Validators.minLength(6),Validators.maxLength(8)],
    confirmpassword:[null,Validators.required,Validators.minLength(6),Validators.maxLength(8)],
     validators: this.password.bind(this)
  });
  
  
  constructor(private fa: FormBuilder) {}
 

  ngOnInit() {
  }
  password(AdminregistrationForm: FormGroup) {
    const { value: password } = AdminregistrationForm.get('password');
    const { value: confirmPassword } = AdminregistrationForm.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}