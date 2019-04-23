import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tabs: any[];
  constructor() { 
    this.tabs = [{'name':'All Profiles','url':'allprofiles'},
                {'name':'Selected Profiles','url':'onhold'}];
  }

  ngOnInit() {
  }

}
