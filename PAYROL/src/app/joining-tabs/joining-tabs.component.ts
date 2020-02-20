import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-joining-tabs',
  templateUrl: './joining-tabs.component.html',
  styleUrls: ['./joining-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JoiningTabsComponent implements OnInit {



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
