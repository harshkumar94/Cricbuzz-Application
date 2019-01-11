import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Playerlist2Service {

  playernames22:Array<string>=[];

  constructor() { }

  addplayernames2(playernames:Array<string>)
  {
     this.playernames22=playernames;
    // this.playernames22.push(this.playernames22);
    //console.log(this.playernames22);

  }
}
