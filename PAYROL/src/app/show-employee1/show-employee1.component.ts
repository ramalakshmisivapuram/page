import { Component, OnInit } from '@angular/core';
import { ShowEmployeeService } from '../services/show-employee.service';
 import { Employee } from '../model/show-employee';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';  
// import { HttpClientService, Employee } from '../services/http-client.service';
@Component({
  selector: 'app-show-employee1',
  templateUrl: './show-employee1.component.html',
  styleUrls: ['./show-employee1.component.scss']
})
export class ShowEmployee1Component implements OnInit {

 employee:Employee[]=[
   
  
  
 ];
 
 
  constructor(private showemployee:ShowEmployeeService) { }

  ngOnInit() {
    this.employee=this.showemployee.getEmployees();
    
 }
}

//   employees: Employee[];
   
//   constructor(
//     private httpClientService: HttpClientService
//   ) { }

//   ngOnInit() {
//     this.httpClientService.getEmployees().subscribe(
//      response =>{this.employees = response;}
//     );
//   }

//   deleteEmployee(employee: Employee): void {
//     this.httpClientService.deleteEmployee(employee)
//       .subscribe( data => {
//         this.employees = this.employees.filter(u => u !== employee);
//       })
//   };
// }