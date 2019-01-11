import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeamplayerService } from '../services/teamplayer.service';
import { DecisionService } from '../services/decision.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pname;
  desc;
  @ViewChild('team1')team1inf :ElementRef;
  @ViewChild('team2')team2inf :ElementRef;
  t1;
  t2;
  teamname1:Array<string>=[];
  teamname2:Array<string>=[];

  //@ViewChild('tea')team1 :ElementRef;
  constructor(private router:Router, private routes:ActivatedRoute,decisi:DecisionService,private teamna1:TeamplayerService,private teamna2:TeamplayerService) 
  {
      //  this.pname=teamplayer.tplayer;
       this.desc=decisi.decis;
  }
  

  ngOnInit() {
  }

  ondecideteamsbuttonclicked()
  {
    this.router.navigate(["/home/new/teams"],{relativeTo:this.routes})
    this.teamna1.team(this.teamname1);
    this.teamna2.team1(this.teamname2);
  }
  
  onentervalue()
  {
    this.t1=(<HTMLInputElement>this.team1inf.nativeElement).value;
    this.teamname1.push((<HTMLInputElement>this.team1inf.nativeElement).value) ;
    //console.log(this.teamname1);
  }

  onentervalue1()
  {
    this.t2=(<HTMLInputElement>this.team2inf.nativeElement).value;
    this.teamname2.push((<HTMLInputElement>this.team2inf.nativeElement).value);
    //console.log(this.teamname2);
  }
  
 
  
}
