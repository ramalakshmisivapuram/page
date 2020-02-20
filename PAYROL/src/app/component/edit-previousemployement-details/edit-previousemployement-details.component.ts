import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-previousemployement-details',
  templateUrl: './edit-previousemployement-details.component.html',
  styleUrls: ['./edit-previousemployement-details.component.scss']
})
export class EditPreviousemployementDetailsComponent implements OnInit {
  public employeement: any[] =[{
    name:'',
   reliving:'',
    dob:'',
   payslips:'',
 
   offer:'',
    leaving:'',
    contract:'',
    fpc:'',
    years:'',
    fromto:'',
    designation:'',
    SNO:''

    
    }];
    addemployeement() {
      this.employeement.push({
        name:'',
        reliving:'',
         dob:'',
        payslips:'',
      
        offer:'',
         leaving:'',
         contract:'',
         fpc:'',
         years:'',
         fromto:'',
         designation:'',
         SNO:''
      
      });
    }
    removeemployeement(i: number) {
      this.employeement.splice(i, 1);
    }

    
  constructor() { }

  ngOnInit() {
  }


}
