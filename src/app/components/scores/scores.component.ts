import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  matches: any;
  constructor(
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      data =>{
        this.matches = data.matches;
      }
    )
  }

  updateMatches(matches:any){
    this.matches = matches;
  }

}