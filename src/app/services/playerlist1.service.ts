import { Injectable } from '@angular/core';
import { Playerlist1 } from '../models/playerlist1';

@Injectable({
  providedIn: 'root'
})
export class Playerlist1Service {

  playernames11:Array<string>=[];
  constructor() { }

  addPlayerList1(playerlist:Array<string>)
  {
    this.playernames11=playerlist;
    //console.log(this.playernames11);
  }
}
