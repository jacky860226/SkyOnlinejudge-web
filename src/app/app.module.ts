import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- NgModel

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RegisterPageComponent } from './register-page/register-page.component';
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
    ChallengeListComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
