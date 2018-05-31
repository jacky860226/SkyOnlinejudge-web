import { Pipe, PipeTransform  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as hljs from 'highlight.js';
import * as $ from 'jquery';

@Pipe({
	name: 'htmlDisplay'
})
export class HtmlDisplayPipe implements PipeTransform {
	constructor(private sanitizer:DomSanitizer){
	}
	transform(value: any, args?: any): any {
		var value_dom = $.parseHTML(value);
		var str = "";
		value_dom.forEach(element => {
			if(element.localName == "code"){
				hljs.highlightBlock(element)
			}
		});
		value_dom.forEach(element => {
			str += element.outerHTML;
		});
		return this.sanitizer.bypassSecurityTrustHtml(str);
	}
}
