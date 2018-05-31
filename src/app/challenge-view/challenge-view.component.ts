import { Component, OnInit } from '@angular/core';
import { ChallengeView } from './challenge-view';
@Component({
	selector: 'app-challenge-view',
	templateUrl: './challenge-view.component.html',
	styleUrls: ['./challenge-view.component.css']
})
export class ChallengeViewComponent implements OnInit {
	ChallengeView : ChallengeView;
	constructor() { }

	ngOnInit() {
		this.ChallengeView = {
			uploadid: 123,
        	uploadtime: "2016-09-15 21:19:43",
        	problem: "a/b",
        	user: "123456789",
        	score: "100,AC",
        	testcaselist: [
				{state: "AC", runtime: 0, memory: 4194304},
				{state: "WA", runtime: 0, memory: 4194304},
				{state: "MLE", runtime: 0, memory: 4194304},
				{state: "RE", runtime: 0, memory: 4194304},
				{state: "TLE", runtime: 0, memory: 4194304},
				{state: "CE", runtime: 0, memory: 4194304},
				{state: "PE", runtime: 0, memory: 4194304},
			],
        	uploadcode: "int main(){std::cout << \"Hello World\n\";}"
		};
	}

	getcolor(str:string) : any {
		console.log(str);
		if(str == "AC" || str == "Accepted"){
			return {'color':'green'};
		}else if(str == "WA" || str == "Wrong Answer"){
			return {'color':'red'};
		}else if(str == "MLE" || str == "Memory Limit Exceed"){
			return {'color':'orange'};
		}else if(str == "RE" || str == "Runtime Error"){
			return {'color':'aqua'};
		}else if(str == "TLE" || str == "Time Limit Exceed"){
			return {'color':'purple'};
		}else if(str == "CE" || str == "Compile Error"){
			return {'color':'yellow'};
		}else{
			return {'color':'black'};
		}
	}

}
