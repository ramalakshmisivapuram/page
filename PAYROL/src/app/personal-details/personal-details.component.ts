import { Component, OnInit } from '@angular/core';
import { FormControl, Validators , FormGroup, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../model/model';
import { Router } from '@angular/router';
import { PersonalServiceService } from '../personal-service.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  use:User={
    firstname:null,
     lastname:null,
     gender:null,
     age:null,
     dob:null,
     Blood:null,
     marital:null,
     phonenumber:null,
     email:null,
     enumber:null,
     paddress:null,
     presentaddress:null,
     pan:null,
     uan:null,
     aadhaar:null,
     licence:null,
     
     }
  
     submitted = false;
    useForm: FormGroup;
  
     constructor(private formBuilder: FormBuilder,private _router:Router,private PersonalService :PersonalServiceService ) { }
   
     ngOnInit() {
   
       this.useForm = this.formBuilder.group({
        firstname: ['', Validators.required],
       lastname:['',Validators.required],
       gender:['',Validators.required],
       age: ['', Validators.required],
       dob:['',Validators.required],
       Blood:['',Validators.required],
       marital:['',Validators.required],
       phonenumber: ['', Validators.required],
       email:['',Validators.required],
       enumber:['',Validators.required],
       paddress: ['', Validators.required],
       presentaddress:['',Validators.required],
       pan:['',Validators.required],
       uan: ['', Validators.required],
       aadhaar:['',Validators.required],
       licence:['',Validators.required]
  
  
  
  
       
     });
     }
   
     get f() { return this.useForm.controls; }
   
     onSubmit() {
         this.submitted = true;
   
        //stop here if form is invalid
       if (this.useForm.invalid) {
           return;
        }
         this.PersonalService.save(this.use);
    
        this._router.navigate(['personal-data']);
        alert("Successfully ");
     }
     
    public imgPath;
    imgURL: any;
    public message: string;
   
    preview(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imgPath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }
}
  // user:User[]=[
  
  // ];

  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }
  
  // formGroup: FormGroup;
  // titleAlert: string = 'This field is required';
  // post: any = '';

  // constructor(private formBuilder: FormBuilder, private _userservice:LoginserviceService) { }

  // ngOnInit() {
  //   this.createForm();
  //   this.setChangeValidate();
  //   this.user=this._userservice.getUsers()
  // }

  // createForm() {
  //   let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   this.formGroup = this.formBuilder.group({
  //     'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
  //     'name': [null, Validators.required],
  //     'firstname': [null, Validators.required],
  //     'lastname': [null, Validators.required],
  //     'gender': [null, Validators.required],
  //     'age': [null, [Validators.required, Validators.minLength(2),Validators.maxLength(2)]],
  //     'date': [null, Validators.required],
  //     'blood': [null, Validators.required],
  //     'martial': [null, Validators.required],
  //     'phonenumber': [null,  [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
  //     'emergencynum': [null, Validators.required],
  //     'file': [null, Validators.required],
  //     'file1': [null, Validators.required],
  //     'file2': [null, Validators.required],
  //     'file3':[null,Validators.required],
      
    
  //     'permanentaddress': [null, Validators.required],
  //     'presentaddress': [null, Validators.required],
  //     'pannumber': [null,  [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
  //     'uan': [null,  [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
  //     'adharnumber': [null, [Validators.required, Validators.minLength(12),Validators.maxLength(12)]],
  //     'drivinglicense': [null, [Validators.required, Validators.minLength(16),Validators.maxLength(16)]],
  //     'password': [null, [Validators.required, this.checkPassword]],
  //     'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
  //     'validate': ''
  //   });
  // }

  // setChangeValidate() {
  //   this.formGroup.get('validate').valueChanges.subscribe(
  //     (validate) => {
  //       if (validate == '1') {
  //         this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
  //         this.titleAlert = "You need to specify at least 3 characters";
  //       } else {
  //         this.formGroup.get('name').setValidators(Validators.required);
  //       }
  //       this.formGroup.get('name').updateValueAndValidity();
  //     }
  //   )
  // }

  // get name() {
  //   return this.formGroup.get('name') as FormControl
  // }

  // checkPassword(control) {
  //   let enteredPassword = control.value
  //   let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //   return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  // }

  // checkInUseEmail(control) {
  //   // mimic http database access
  //   let db = ['tony@gmail.com'];
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
  //       observer.next(result);
  //       observer.complete();
  //     }, 4000)
  //   })
  // }

  // getErrorEmail() {
  //   return this.formGroup.get('email').hasError('required') ? 'Field is required' :
  //     this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
  //       this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  // }

  // getErrorPassword() {
  //   return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
  //     this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  // }
  // public imgPath;
  // imgURL: any;
  // public message: string;
 
  // preview(files) {
  //   if (files.length === 0)
  //     return;
 
  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = "Only images are supported.";
  //     return;
  //   }
 
  //   var reader = new FileReader();
  //   this.imgPath = files;
  //   reader.readAsDataURL(files[0]); 
  //   reader.onload = (_event) => { 
  //     this.imgURL = reader.result; 
  //   }
  // }
  // onSubmit() {
  //   if (this.formGroup.invalid) {
  //     return;
  //  }
  //  alert("success")
    
  // }

              
              


    

