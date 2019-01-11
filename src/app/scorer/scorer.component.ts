import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scorer',
  templateUrl: './scorer.component.html',
  styleUrls: ['./scorer.component.css']
})
export class ScorerComponent implements OnInit {
  

  constructor(private router:Router,private route:ActivatedRoute) 
  {

   }

  ngOnInit() {
  }

  onnewmatchbuttonclick()
  {
    this.router.navigate(["/home/new"],  {relativeTo:this.route})
  }

}
