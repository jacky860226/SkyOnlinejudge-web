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
	np :number;
	index : number;
	filter = {
		id : '',
		name : 'ProblemName1'
	};

	constructor(private Service:ProblemService) {
	}

	ngOnInit() {
		this.index = 1;
		// Display
		// this.getProblemListDetails();
		// Query
		this.getProblemListQueryDetails();
	}

	getProblemsList(): void {
		var start : number = (this.index - 1) * this.Details.numberOfItemsInOnePage;
		this.Service.getList <Problem>('problems' , start , this.Details.numberOfItemsInOnePage)
		.subscribe(List => this.List = List);
	}

	getProblemListDetails(): void {
		this.Service.getListDetails <ProblemListDetails>('problems')
		.subscribe(Details =>{			
			this.Details = Details;
			this.getProblemsList();
		});
	}

	getProblemsListQuery(): void {
		var start : number = (this.index - 1) * this.Details.numberOfItemsInOnePage;
		this.Service.getListQuery <Problem>('problems' , this.filter , start , this.Details.numberOfItemsInOnePage)
		.subscribe(List => this.List = List);
	}

	getProblemListQueryDetails(): void {
		this.Service.getListQueryDetails <ProblemListDetails>('problems' , this.filter)
		.subscribe(Details => {
			this.Details = Details
			this.np = this.Details.numberOfPages;
			this.getProblemsListQuery();
		});
	}

	onSelect(index : number): void{
		this.index = index;
		// Display
		// this.getProblemList();
		// Query
		this.getProblemsListQuery();
	}
}