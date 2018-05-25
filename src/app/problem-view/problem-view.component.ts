import { Component, OnInit } from '@angular/core';
import { ProblemView } from './problem-view';
@Component({
  selector: 'app-problem-view',
  templateUrl: './problem-view.component.html',
  styleUrls: ['./problem-view.component.css']
})
export class ProblemViewComponent implements OnInit {
	ProblemView : ProblemView;
	constructor() { }

	ngOnInit() {
		this.ProblemView = {
			topic : '1. a/b',
			judge: 'Normal Judge',
        	codetype: 'Logged_in_AC',
        	html: '',
        	markdown: '',
        	pdf: ''
		};
	}

}
