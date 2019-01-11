import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onscorecardbuttonclick()
  {

    
    this.router.navigate(['scorecard'], { relativeTo: this.route })
  }


  onscorerbuttonclick()
  {
    this.router.navigate(['home'], { relativeTo: this.route} )
  }

  oncommentrybuttonclick()
  {
    this.router.navigate(['commentry'], { relativeTo: this.route} )
  }

}
