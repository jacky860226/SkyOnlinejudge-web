import { Component, OnInit } from '@angular/core';
import * as ace from '../../../node_modules/ace-builds/src-noconflict/ace.js';

@Component({
  selector: 'app-problem-submit',
  templateUrl: './problem-submit.component.html',
  styleUrls: ['./problem-submit.component.css']
})
export class ProblemSubmitComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
		var editor = ace.edit("editor");
		editor.setTheme("ace/theme/twilight");
		var JavaScriptMode = ace.require("ace/mode/c_cpp").Mode;
		editor.session.setMode(new JavaScriptMode());
	}

	fileselect(event:any):void{
		console.log("file select");
	}

}
