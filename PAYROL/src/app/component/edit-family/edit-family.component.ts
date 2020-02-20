import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-family',
  templateUrl: './edit-family.component.html',
  styleUrls: ['./edit-family.component.scss']
})
export class EditFamilyComponent implements OnInit {

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

}
