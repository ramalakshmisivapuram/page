import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {
  selectNext(el){
    el.selectedIndex += 1;
  }
  selectNext1(el){
    el.selectedIndex -= 1;
  }
  constructor() { }

  ngOnInit() {
  }
 

}
