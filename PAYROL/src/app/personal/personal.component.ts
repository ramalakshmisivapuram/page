import { Component, OnInit } from '@angular/core';
import { User } from '../model/model';
import { PersonalServiceService } from '../personal-service.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  user:User[]=[
  ];
 constructor( private _userservice:PersonalServiceService) { }

 ngOnInit() {
   this.user=this._userservice.getUsers();
 }
 

}
