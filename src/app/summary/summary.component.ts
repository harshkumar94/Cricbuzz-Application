import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Playerlist2Service } from '../services/playerlist2.service';
import { CommentryService } from '../services/commentry.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  plnames;
  ball = 0;
  over = 0;
  description;
  // public Wicket:boolean=false;

  // possibility;
  // @ViewChild('possibleruns')possiblerunsinf:ElementRef;
  constructor(plname: Playerlist2Service, private commen: CommentryService) {
    this.plnames = plname.playernames22;
    //console.log(this.plnames);

  }

  ngOnInit() {
  }
  // onselect()
  //  { 
  //    this.possibility=(<HTMLInputElement>this.possiblerunsinf.nativeElement).value;
  //    console.log(this.possibility);
  //    if(this.possibility=='Wicket')
  //    {
  //      this.Wicket=true;
  //    }
  //    else
  //    {
  //      this.Wicket=false;
  //    }

  //  }

  /**
   * @description
   * @param 
   * @returns
   */
  onaddscoreclick() {
    if (this.ball < 6) {
      this.ball++;
      //console.log(this.ball);
    }
    else if (this.ball == 6) {
      this.ball = 0;
      this.over++;
      //console.log(this.over);
    }

    this.commen.addcommentry(this.ball, this.over, this.description);
    //console.log(this.ball,this.over,this.description);

  }


}
