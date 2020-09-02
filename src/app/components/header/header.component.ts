import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dateNow: Date;
  ch: string = 'yahya';

  constructor() { }

  ngOnInit(){
    this.dateNow = new Date();
  }

 }