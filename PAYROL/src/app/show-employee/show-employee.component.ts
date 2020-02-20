import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/show-employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowEmployeeService } from '../services/show-employee.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';  
@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {

  employee:Employee[]=[
   
  
  
  ];
 
 
  constructor(private showemployee:ShowEmployeeService) { }

  ngOnInit() {
    this.employee=this.showemployee.getEmployees();
    
  }

  
}
