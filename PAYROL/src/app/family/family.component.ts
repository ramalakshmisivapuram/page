import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  
  public relationship: any[] =[{
    name:'',
    relation:'',
    dob:'',
   age:'',
 
    occuption:'',
    contact:''
    
    }];
    addrelationship() {
      this.relationship.push({
      name:'',
      relation:'',
      dob:'',
     age:'',
   
      occuption:'',
      contact:''
      
      });
    }
    removerelationship(i: number) {
      this.relationship.splice(i, 1);
    }
  constructor() { }

  ngOnInit() {
  }
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }

}
