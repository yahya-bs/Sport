import { MatchService } from './../services/match.service';
import { PlayerService } from './../services/player.service';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: any;
  players: any;
  matches:any;
  constructor(
    private router:Router,
    private userService: UserService,
    private playerService:PlayerService,
    private matchService:MatchService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      data =>{
        this.users = data;
      }
    )

    this.playerService.getAllPlayers().subscribe(
      play =>{
        this.players = play;
      }
    )

    this.matchService.getAllMatches().subscribe(
      match =>{
        this.matches = match;
      }
    )
  }
 
  goToUser(id:number){
    this.router.navigate([`displayUser/${id}`]);
  }
  deletePlayer(id:number){
    this.userService.deletetUserById(id).subscribe(
      () => { alert('User deleted')
    }
    )
  }
}