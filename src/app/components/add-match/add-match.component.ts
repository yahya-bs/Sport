import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  match:any={}
  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
  }

  add(){
    console.log('match', this.match);
    this.matchService.addMatch(this.match).subscribe(
      () => {
        console.log('Service Called');
      }
    )
  }
}
