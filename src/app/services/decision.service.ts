import { Injectable } from '@angular/core';
import { decision } from '../models/decision';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  decis = [new decision("Batting"),
           new decision("Bowling")
        ];


  constructor() {}

}
