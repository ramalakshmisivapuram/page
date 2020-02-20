import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joining-tabs',
  templateUrl: './joining-tabs.component.html',
  styleUrls: ['./joining-tabs.component.scss']
})
export class JoiningTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectNext(el){
    el.selectedIndex += 1;
  }
  selectNext1(el){
    el.selectedIndex -= 1;
  }
}
