import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageBarComponent } from '../image-bar/image-bar.component';
import { PaginationComponent } from '../pagination/pagination.component';

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
	page : number;
	filter = {
		id : '',
		name : 'ProblemName1'
	};

	constructor(private Service:ProblemService,
				private router:Router,
				private route: ActivatedRoute) {
	}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
    	if(id==null) this.page = 1;
		else this.page = +id;
		
		this.Details = {
			numberOfPages: 10,
        	numberOfItemsInOnePage: 10,
        	numberOfItems: 0
		}

		// Display
		this.getProblemListDetails();
		// Query
		// this.getProblemListQueryDetails();
	}

	getProblemsList(): void {
		var start : number = (this.page - 1) * this.Details.numberOfItemsInOnePage;
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
		var start : number = (this.page - 1) * this.Details.numberOfItemsInOnePage;
		this.Service.getListQuery <Problem>('problems' , this.filter , start , this.Details.numberOfItemsInOnePage)
		.subscribe(List => this.List = List);
	}

	getProblemListQueryDetails(): void {
		this.Service.getListQueryDetails <ProblemListDetails>('problems' , this.filter)
		.subscribe(Details => {
			this.Details = Details
			this.getProblemsListQuery();
		});
	}

	loadPage(page: number) {
		this.page = page;
		this.router.navigate(['/problem/list/' + page]);
		// Display
		this.getProblemsList();
		// Query
		// this.getProblemsListQuery();
	}
}