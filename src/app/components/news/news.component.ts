import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  x: number[];
  constructor() { }

  ngOnInit(): void {
    this.x = this.higher([10, 15, 2, 19]);
  }

  higher(T: number[]) {
    T.reverse;
    return T
  }
}