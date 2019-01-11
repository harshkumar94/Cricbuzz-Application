import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScorerComponent } from './scorer/scorer.component';
import {ScorecardComponent} from './scorecard/scorecard.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { SummaryComponent } from './summary/summary.component';
import { CommentaryComponent } from './commentary/commentary.component';

const routes: Routes = [
  
 {path:'home',component:ScorerComponent},
 {path:'scorecard',component:ScorecardComponent},
 {path:'home/new',component:HomeComponent},
 {path:'home/new/teams',component:TeamsComponent},
 {path:'home/new/teams/summary',component:SummaryComponent},
 {path:'commentry',component:CommentaryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
