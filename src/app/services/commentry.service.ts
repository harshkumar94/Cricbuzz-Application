import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentryService {

  public balls;
  public overs;
  public description;

  constructor() { }

  addcommentry(balls:any,overs:any,description:string)
  {
    
    this.balls=balls;
    this.overs=overs;
    this.description= description;
    console.log(this.balls,this.overs,this.description);

  }
}
