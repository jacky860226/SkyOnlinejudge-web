import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MainPageComponent }   from './main-page/main-page.component';
import { ProblemListComponent }   from './problem-list/problem-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ChallengeListComponent }   from './challenge-list/challenge-list.component';
import { NotFoundPageComponent }   from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'problem/list', component: ProblemListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent},
  { path: 'chal/list', component: ChallengeListComponent },
  { path: 'chal/list/:id', component: ChallengeListComponent },
  { path: '', component: MainPageComponent },
  { path: '**', component: NotFoundPageComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}