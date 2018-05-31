import { Component, OnInit , ElementRef, Directive } from '@angular/core';
import { ProblemView } from './problem-view';
import { HtmlDisplayPipe } from "../render/html-display.pipe";
import { MdDisplayPipe } from "../render/md-display.pipe";
import { ProblemViewService } from './problem-view.service';

@Component({
  selector: 'app-problem-view',
  templateUrl: './problem-view.component.html',
  styleUrls: ['./problem-view.component.css'],
  providers : [ HtmlDisplayPipe , MdDisplayPipe]
})
export class ProblemViewComponent implements OnInit {
	ProblemView : ProblemView;
	converted : string;
	code : string;
	constructor(private HtmlDisplayPipe: HtmlDisplayPipe,
				private MdDisplayPipe: MdDisplayPipe,
				private ProblemViewService : ProblemViewService) { }

	ngOnInit() {
		this.ProblemView = {
			topic : '1. a/b',
			judge: 'Normal Judge',
        	codetype: 'Logged_in_AC',
        	html: '<h1>HiHi</h1><script>console.log(123)</script><code>int main(){ std::cout << "Hello World"; }</code>',
			markdown: '# I am Markdown\n\n```c++\nstd::cout << "Hello World"; \n```',
        	pdf: ''
		};
		this.code = 'int main(){\n std::cout << "Hello World";\n }\n//12345678901234567890123456789//12345678901234567890123456789';
	}
}