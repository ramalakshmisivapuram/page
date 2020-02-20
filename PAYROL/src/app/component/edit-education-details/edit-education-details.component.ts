import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-education-details',
  templateUrl: './edit-education-details.component.html',
  styleUrls: ['./edit-education-details.component.scss']
})
export class EditEducationDetailsComponent implements OnInit {

  public education: any[] =[{
    name:'',
    university:'',
    
    year:'',
    graduate:'',
    reason:'',
    fpc:'',
    stream:''
    }];
    addeducation() {
      this.education.push({
      name:'',
      university:'',
      year:'',
      graduate:'',
      reason:'',
      fpc:'',
      stream:''
      });
    }
    removeeducation(i: number) {
      this.education.splice(i, 1);
    }
  constructor() { }

  ngOnInit() {
  }
}
