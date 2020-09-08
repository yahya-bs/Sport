import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchUrl = 'http://localhost:3000'
  constructor(
    private httpClient:HttpClient
  ) { }

  getAllMatches(){
    return this.httpClient.get<{message:string,matches:any}>(`${this.matchUrl}/matches`);
  }
  
  getMatchById(id:number){
    return this.httpClient.get(`${this.matchUrl}/${id}`);
  }
  
  deletetMatchById(id:number){
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }
  
  addMatch(match:any){
    return this.httpClient.post(this.matchUrl,match);
  }
  
  editMatch(match:any){
    return this.httpClient.put(`${this.matchUrl}/${match.id}`, match);
  }

}
