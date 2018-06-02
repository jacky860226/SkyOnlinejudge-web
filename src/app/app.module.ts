import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ImageBarComponent } from './image-bar/image-bar.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ContestListComponent } from './contest-list/contest-list.component';
import { ProblemViewComponent } from './problem-view/problem-view.component';
import { HighlightCodeDirective } from './render/highlight-code.directive';
import { HtmlDisplayPipe } from './render/html-display.pipe';
import { MdDisplayPipe } from './render/md-display.pipe';
import { ChallengeViewComponent } from './challenge-view/challenge-view.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ChallengeListFormComponent } from './challenge-list-form/challenge-list-form.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProblemSubmitComponent } from './problem-submit/problem-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainPageComponent,
    ProblemListComponent,
    NavBarComponent,
    ImageBarComponent,
    ChallengeListComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ContestListComponent,
    ProblemViewComponent,
    HighlightCodeDirective,
    HtmlDisplayPipe,
    MdDisplayPipe,
    ChallengeViewComponent,
    PaginationComponent,
    ChallengeListFormComponent,
    NotFoundPageComponent,
    ProblemSubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
