import { Component, OnInit } from '@angular/core';

import { ImageBarComponent } from '../image-bar/image-bar.component';

import { Problem , ProblemListDetails } from './problem';
import { ProblemService } from './problem.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
	List : Problem[];
	Details: ProblemListDetails;
	pages = [];
	index : number;

	constructor(private Service:ProblemService) {
	}

	ngOnInit() {
		this.index = 1;
		this.pages = [1 , 2 , 3 , 4 , 5];
		this.getProblemListDetails();
	}

	getProblems(): void {
		var start : number = (this.index - 1) * this.Details.numberOfProblemsInOnePage;
		this.Service.getList <Problem>('problems' , start , this.Details.numberOfProblemsInOnePage)
		.subscribe(List => this.List = List);
	}

	getProblemListDetails(): void {
		this.Service.getListDetails <ProblemListDetails>('problems')
		.subscribe(Details =>{
			this.Details = Details;
			this.getProblems();
		});
	}

	onSelect(index : number): void{
		this.index = index;
		this.getProblems();
	}
}