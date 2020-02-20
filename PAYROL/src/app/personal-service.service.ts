import { Injectable } from '@angular/core';
import { User } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class PersonalServiceService {
  userlist:User[]=[ 
  ];
  getUsers():User[]{
      return this.userlist;

  }
  save(user:User){                                                         
     
      this.userlist.push(user);

  }
  constructor() { }
}
