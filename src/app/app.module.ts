import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ScorerComponent } from './scorer/scorer.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { TeamsComponent } from './teams/teams.component';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ScorerComponent,
    ScorecardComponent,
    CommentaryComponent,
    TeamsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
