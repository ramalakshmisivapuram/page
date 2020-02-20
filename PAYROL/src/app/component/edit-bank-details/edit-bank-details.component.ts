import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bank-details',
  templateUrl: './edit-bank-details.component.html',
  styleUrls: ['./edit-bank-details.component.scss']
})
export class EditBankDetailsComponent implements OnInit {

  public bank: any[] =[{
    bankname:'',
   accountname:'',
  accounttype:'',
   ifsccode:''
 
   
    }];
    addbank() {
      this.bank.push({
        bankname:'',
        accountname:'',
       accounttype:'',
        ifsccode:''
      
      
      });
    }
    removebank(i: number) {
      this.bank.splice(i, 1);
    }
  constructor() { }

  ngOnInit() {
  }
  
   
}
