import { Component, OnInit } from '@angular/core';

import { ImageBarComponent } from '../image-bar/image-bar.component';

import { Problem } from './problem';
import { ProblemService } from './problem.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  ProblemList: Problem[];
  pages = [];
  index : number;
  maxpages : number;

  constructor(private problemService: ProblemService) {
  }

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void {
    this.problemService.getProblems()
    .subscribe(ProblemList => this.ProblemList = ProblemList);
    // this.problemService.getMaxpages()
    // .subscribe(maxpages => this.maxpages = maxpages);
    this.maxpages = 13;
    this.index = 1;
    this.changeInterval();
  }

  onSelect(index : number): void{
    this.index = index;
    this.changeInterval();
  }

  jumpPage(delta : number): void{
    if(this.index + delta < 1){
      this.index = 1;
    }else if(this.index + delta > this.maxpages){
      this.index = this.maxpages;
    }else{
      this.index = this.index + delta;
    }
    this.changeInterval();
  }

  changeInterval(): void{
    this.pages = [];
    let j = this.index - 2;
    if(this.index + 2 > this.maxpages){
      j = j - (this.index + 2 - this.maxpages)
    }
    if(j < 1){
      j = 1;
    }
    for(let i = j;i <= j + 4;i++){
      if(i >= 1 && i <= this.maxpages){
        this.pages.push(i);
      }
    }
  }
}