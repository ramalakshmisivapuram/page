import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

 resetForm = this.fb.group({
   Oldpassword: [null,Validators.required],
    Newpassword: [null,Validators.required],
    Confirmpassword:[null,Validators.required]
  });
   Oldpassword: string;
    Newpassword: string;
    Confirmpassword:string;
    formGroup: any;
  
  constructor(private fb: FormBuilder, private router:Router) {}
  
  onSubmit() {
   
    if (this.resetForm.invalid) {
      return;
   }
   this.router.navigate(['login']);
   alert(" Reset Password successfully");
  }
  ngOnInit() {
    
    
  }
}
