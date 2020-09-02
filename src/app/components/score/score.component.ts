import { MatchService } from './../../services/match.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() data: any;
  @Output() newMatches: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private matchService: MatchService
  ) { }

  ngOnInit() {
  }

  compare(x: number, y: number) {
    if (x > y) {
      return ('WIN')
    } else if (x < y) {

      return ('LOSES');
    } else return ('DRAW')

  }

  goToMatch(id: number) {
    this.router.navigate([`displayMatch/${id}`]);
  }
  deleteMatch(id: number) {
    this.matchService.deletetMatchById(id).subscribe(
      () => {
        alert('Match deleted')
        this.matchService.getAllMatches().subscribe(
          data => {
            this.newMatches.emit(data);
          }
        )
      }
    )
  }
}
