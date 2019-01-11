import { Injectable } from '@angular/core';
import { teamplayer } from '../models/teamplayer';

@Injectable({
  providedIn: 'root'
})
export class TeamplayerService {

  teamname:Array<string>=[];
  teamname1:Array<string>=[];

  team(teamplayer1:Array<string>)
  { 
    this.teamname=teamplayer1;
    console.log(this.teamname);

  }
  team1(teamplayer2:Array<string>)
  {
    this.teamname1=teamplayer2;
    console.log(this.teamname1);
  }

 

  


  constructor() { }
}
