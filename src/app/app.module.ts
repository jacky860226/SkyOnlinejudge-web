import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ImageBarComponent } from './image-bar/image-bar.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainPageComponent,
    ProblemListComponent,
    NavBarComponent,
    ImageBarComponent,
    ChallengeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
