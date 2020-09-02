import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contact:any= {};
  x:number=7;
  constructor() { }
  ngOnInit() {
  }
  valider() {
    alert("Button is clicked");
    console.log('Contact object', this.contact);
  }
}