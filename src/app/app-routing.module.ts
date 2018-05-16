import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MainPageComponent }   from './main-page/main-page.component';
import { ProblemListComponent }   from './problem-list/problem-list.component';
import { ChallengeListComponent }   from './challenge-list/challenge-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'skyOJ', pathMatch: 'full' },
  { path: 'problem', component: ProblemListComponent },
  { path: 'chal', component: ChallengeListComponent },
  { path: 'skyOJ', component: MainPageComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}