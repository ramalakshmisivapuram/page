import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-attendence',
  templateUrl: './month-attendence.component.html',
  styleUrls: ['./month-attendence.component.scss']
})
export class MonthAttendenceComponent implements OnInit {


  
  public MonthDetails: object = [];  

  
    public MonthHeader= [{name:"APRIL"},{name:'MAY'},{name:'JUNE'},{name:'JULY'},{name:'AUGUST'},{name:'SEPTEMBER'},{name:'OCTOBER'},{name:'NOVEMBER'},{name:'DECEMBER'}];  
    
    public Products = [  
      {Name:'JANUARY', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '28', intime: '', outtime: '',duration: '' },  

        {Name:'JANUARY', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '30', intime: '', outtime: '',duration: '' },  
        
        {Name:'JANUARY', dates: '31', intime: '', outtime: '',duration: '' },  
       
        {Name:'FEBRUARY', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '28', intime: '', outtime: '',duration: '' }, 
        {Name:'FEBRUARY', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '30', intime: '', outtime: '',duration: '' }, 
        {Name:'FEBRUARY', dates: '31', intime: '', outtime: '',duration: '' }, 
       

        {Name:'MARCH', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'MARCH', dates: '31', intime: '', outtime: '',duration: '' },
           
        {Name:'APRIL', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '30', intime: '', outtime: '',duration: '' },
       
       
        {Name:'MAY', dates: '01', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '02', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '03', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '04', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '06', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '07', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '08', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '09', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '10', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '11', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '12', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '13', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '14', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '15', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '16', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '17', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '18', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '19', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '20', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '21', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '22', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '23', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '24', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '25', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '26', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '27', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '28', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '29', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '30', intime: '555', outtime: '',duration: '15-BS0103DX' },
        {Name:'MAY', dates: '31', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        
        {Name:'JUNE', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '13', intime: '', outtime: '',duration: '' },  
      
        {Name:'JUNE', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '29', intime: '', outtime: '',duration: '' },
        {Name:'JUNE', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'JUNE', dates: '31', intime: '', outtime: '',duration: '' },
      

      
        {Name:'JULY', dates: '01', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '02', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '03', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '04', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '05', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '06', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '08', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '09', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '10', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '11', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '12', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '13', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '14', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '15', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '16', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '17', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '18', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '19', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '20', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '21', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '22', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '23', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '24', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '25', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '26', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '27', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '28', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '29', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '30', intime: '777', outtime: '',duration: '' },
        {Name:'JULY', dates: '31', intime: '777', outtime: '',duration: '' },  
        

        
        {Name:'AUGUST', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'AUGUST', dates: '31', intime: '', outtime: '',duration: '' },  
        
        {Name:'SEPTEMBER', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'SEPTEMBER', dates: '31', intime: '', outtime: '',duration: '' },
    
        
        
         
        
        {Name:'OCTOBER', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'OCTOBER', dates: '31', intime: '', outtime: '',duration: '' },  
        

         
        
        {Name:'NOVEMBER', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'NOVEMBER', dates: '31', intime: '', outtime: '',duration: '' },



        {Name:'DECEMBER', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '09', intime: '', outtime: '',duration: '' },
        {Name:'DECEMBER', dates: '10', intime: '', outtime: '',duration: '' },   
        {Name:'DECEMBER', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '30', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '31', intime: '', outtime: '',duration: '' },
      
       
        



        
       ];  
  
    constructor() {  
      
        this.getMonth();  
        this.getYear();  
    }  
    getMonth() {  
        console.log("getMonth");  
        return this.MonthHeader;  
    }  
  
  
  SearchMonth(name: string) {  
  
        let obj = this.Products.filter(m => m.Name == name);  
        this.MonthDetails = obj;  
        return this.MonthDetails;  
    }  


  ngOnInit() {
  }



  public YearDetails: object = [];  

  
  public YearHeader= [{name:"2019-2020"},{name:'2018-2019'}];  
  
  public Products1 = [  
    {Name:'2018-2019', month: 'April', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'May', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'June', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'July', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'August', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'September', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'October', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'November', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'December', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'January', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'February', days: '', APL: '', ACL: '' },  
    {Name:'2018-2019', month: 'March', days: '', APL: '', ACL: '' },  

    {Name:'2019-2020', month: 'April', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'May', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'June', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'July', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'August', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'September', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'October', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'November', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'December', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'January', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'February', days: '', APL: '', ACL: '' },  
    {Name:'2019-2020', month: 'March', days: '', APL: '', ACL: '' },  
   

     
     ];  

   
  getYear() {  
      console.log("getYear");  
      return this.YearHeader;  
  }  


 SearchYear(name: string) {  

      let obj = this.Products1.filter(m => m.Name == name);  
      this.YearDetails = obj;  
      return this.YearDetails;  
  }  





}
