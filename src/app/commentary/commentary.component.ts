import { Component, OnInit } from '@angular/core';
import { CommentryService } from '../services/commentry.service';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent implements OnInit {

  balls;
  overs;
  description;

  constructor(ball:CommentryService,over:CommentryService,description:CommentryService) 
  { 
     this.balls=ball.balls;
     this.overs=over.overs;
     this.description=description.description;
     console.log(this.balls);
  }

  ngOnInit() {
  }

}
