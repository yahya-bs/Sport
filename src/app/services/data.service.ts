import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let matches = [
      { id: 1, teamOne: 'FCB', teamTwo: 'Madrid', scoreOne: 0, scoreTwo: 2, date: 'February, 10th, 2016', Time: '7:30 PM GMT+0' },
      { id: 2, teamOne: 'CA', teamTwo: 'EST', scoreOne: 4, scoreTwo: 1 },
      { id: 3, teamOne: 'CSS', teamTwo: 'Bizerte', scoreOne: 2, scoreTwo: 2 },
      { id: 4, teamOne: 'ATM', teamTwo: 'Bayern', scoreOne: 3, scoreTwo: 1 },
      { id: 5, teamOne: 'Sevilla', teamTwo: 'PSG', scoreOne: 0, scoreTwo: 1 }
    ];

    let players = [
      { id: '1', name: 'Cristiano Ronaldo', team: 'Juventus', position: 'Forward', dateToJoin: '2018', dateOfBirth: 'February 5th, 1985', height: '1.87m', weight: '84kg', about: 'Cristiano Ronaldo dos Santos Aveiro, is a Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team', pic: 'assets/images/cristiano.jpg' },
      { id: '2', name: 'Lionel Messi', team: 'Barcelone', position: 'Forward', dateToJoin: '2004', dateOfBirth: 'June 24th, 1987', height: '1.70m', weight: '72kg', about: 'Lionel Andrés Messi is an Argentine professional footballer who plays as a forward and captains both La Liga club Barcelona and the Argentina national team.', pic: 'assets/images/messi.jpg' }
    ];

    let users = [
      { id: 1, fName: 'Yahya', lName: 'Ben Salah' },
      { id: 2, fName: 'Kamel', lName: 'Ben Salah' },
    ];

    return { matches, players, users };

  }
}
