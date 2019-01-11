import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Playerlist1Service } from '../services/playerlist1.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Playerlist2Service } from '../services/playerlist2.service';
import { TeamplayerService } from '../services/teamplayer.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  
  p1;
  p2;
  record=1;
  tt1;
  tt2;
  playernames1:Array<string>=[];
  playernames2:Array<string>=[];
  @ViewChild('playername1')team1inf :ElementRef;
  @ViewChild('playername2')team2inf :ElementRef;
  constructor(private playerls1:Playerlist1Service,private router:Router,private routes:ActivatedRoute,private playerls2:Playerlist2Service, teampl1:TeamplayerService) {
    this.tt2=teampl1.teamname1;
    this.tt1=teampl1.teamname;
     //console.log(this.tt1);
   }

  ngOnInit() {
  }

   onsubmitclick()
   {
     this.record++;
     if(this.record<=12){

     
     this.p1=(<HTMLInputElement> this.team1inf.nativeElement).value;
     this.playernames1.push((<HTMLInputElement> this.team1inf.nativeElement).value);
     //console.log(this.playernames1);
    }
   }

   onsubmitclick1()
   {
    this.p2=(<HTMLInputElement> this.team2inf.nativeElement).value;
    this.playernames2.push((<HTMLInputElement> this.team2inf.nativeElement).value);
    console.log(this.p2);
    console.log(this.playernames2);
    
   }
   onFinalClick()
  {
    this.playerls1.addPlayerList1(this.playernames1);
  }
  ondeleteclick(){
    this.playernames1.pop();
  }
  onstartclick()
  {
        this.router.navigate(['/home/new/teams/summary'],{relativeTo:this.routes});
  }
  
  onFinalClick1()
  {
    this.playerls2.addplayernames2(this.playernames2);
  }

}