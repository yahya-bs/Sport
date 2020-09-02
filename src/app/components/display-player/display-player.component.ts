import { PlayerService } from './../../services/player.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {

  player:any;
  id :number;
  constructor(private playerService:PlayerService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      x => {
        this.player = x;
      }
    )
  }


}
