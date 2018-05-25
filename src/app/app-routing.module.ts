import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MainPageComponent }   from './main-page/main-page.component';
import { ProblemListComponent }   from './problem-list/problem-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ChallengeListComponent }   from './challenge-list/challenge-list.component';
import { ProblemViewComponent } from './problem-view/problem-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'skyOJ', pathMatch: 'full' },
  { path: 'problem', component: ProblemListComponent },
  { path: 'skyOJ', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent},
  { path: 'chal', component: ChallengeListComponent },
  { path: 'chal/:id', component: ChallengeListComponent },
  { path: 'skyOJ', component: MainPageComponent },
  { path: 'problem-view', component: ProblemViewComponent }
  //{ path: '**', component: NotFoundPageComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}